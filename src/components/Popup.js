import React from "react";
import "../css/popup.css";

const Popup = () => {
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <p>
            해당 사이트는 스터디용으로 제작되었으며, 모든 리소스의 저작권은
            원저작자인 카카오브레인 블로그에게 있습니다. <br />
            * 본 사이트는 Chrome 에 최적화되어 있습니다. <br />* 해당 사이트와
            관련한 문제가 있으면 연락 부탁드립니다.
          </p>
          <button className="popup-close">창닫기</button>
        </div>
      </div>
    </>
  );
};

export default Popup;
