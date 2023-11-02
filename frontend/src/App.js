import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Curation from "./components/Curation/Curation";

// import logo from './logo.svg';
// import './App.css';

function App() {
  // fetch로 인기 검색어 내용을 가져오게 해야 하는데...
  // Backend 연계를 해본 적이 없어서 잘 모르겠다 😂
  const top__search = [
    "ChatGPT",
    "웹개발",
    "디자인",
    "AI",
    "엑셀",
    "Python",
    "부트캠프",
    "자바스크립트",
    "메타버스",
    "안젤라유",
  ];

  return (
    <div>
      <Header />
      <Search op={top__search} />
      <Curation />
    </div>
  );
}

export default App;
