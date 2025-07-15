import IntroEditor from "../components/IntroEditor";

import "./Main.css";

function Main() {
  return (
    <div>
      <div className="main-spacing"></div>

      {/* 명언과 에디터 등 나머지 컨텐츠 */}
      <div className="main-quote-block">

        <div className="quote-top-mark">“</div>
        <div className="main-quote">
          자신을 믿지않는 녀석따위는... <br />
          노력할 가치도 없다!<br />
          -마이트 가이
        </div>
        <div className="quote-bottom-mark">”</div>
      </div>


      <div className="main-spacing"></div>

      <IntroEditor />
      <div className="main-spacing"></div>

    </div>
  );
}

export default Main;

