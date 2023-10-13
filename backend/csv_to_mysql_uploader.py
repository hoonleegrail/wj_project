import os
import csv
import pymysql


def upload_csv_to_mysql(directory_path, host_name, port, username, password, database_name):
    connection = pymysql.connect(
        host=host_name,
        port=port,
        user=username,
        password=password,
        database=database_name,
        charset='utf8'
    )

    cursor = connection.cursor()
    csv_files = [f for f in os.listdir(directory_path) if f.endswith('.csv')]

    for csv_file in csv_files:
        csv_file_path = os.path.join(directory_path, csv_file)

        with open(csv_file_path, 'r', encoding='utf-8') as file:
            reader = csv.reader(file)
            columns = next(reader)
            table_name = csv_file.split('.')[0]

            create_query = f"CREATE TABLE IF NOT EXISTS {table_name} ({', '.join([f'{col} TEXT' for col in columns])});"
            cursor.execute(create_query)

            for row in reader:
                insert_query = f"INSERT INTO {table_name} ({', '.join(columns)}) VALUES ({', '.join(['%s'] * len(row))});"

                try:
                    cursor.execute(insert_query, row)
                except pymysql.err.DataError as e:
                    if "Data too long for column" in str(e):
                        # 직전에 삽입한 데이터 삭제
                        delete_query = f"DELETE FROM {table_name} ORDER BY id DESC LIMIT 1;"
                        cursor.execute(delete_query)

                        problematic_index = columns.index(e.args[1].split("'")[1])
                        problematic_value = row[problematic_index]

                        # 해당 컬럼의 길이를 늘림
                        alter_query = f"ALTER TABLE {table_name} MODIFY {columns[problematic_index]} TEXT({len(problematic_value)});"
                        cursor.execute(alter_query)

                        # 데이터 다시 삽입
                        cursor.execute(insert_query, row)

            connection.commit()

    cursor.close()
    connection.close()


directory_path = "..\\woongjindata\\merge_who_should_attend_data_df_info_ko_en"
host_name = "127.0.0.1"
port = 3306
username = "root"
password = os.environ.get('DB_PASSWORD')
database_name = "woongjin"

upload_csv_to_mysql(directory_path, host_name, port, username, password, database_name)
