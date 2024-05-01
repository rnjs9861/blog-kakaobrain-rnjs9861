import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 상단에 출력할 JSX

// 메인에 출력할 JSX

// 하단에 출력할 JSX

root.render(
  <div class="wrap">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
);
