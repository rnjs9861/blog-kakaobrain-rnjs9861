import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import Footer from "./components/Footer";
import MainTop from "./components/MainTop";
import MainBottom from "./components/MainBottom";

import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//컴포넌트 만들기

root.render(
  <>
    {/* <Popup></Popup> */}
    <div className="wrap">
      <Header></Header>
      <MbHeader></MbHeader>
      <div className="main">
        <div className="inner">
          <MainTop></MainTop>
          <MainBottom></MainBottom>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </>
);
