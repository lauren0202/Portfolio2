import React from "react";
import "./Work.css"

function Work() {
  return (
    <div className="work-container">
      {/* 아기사자 영역 */}
      <div className="work-row">
        <img src="/images/BabyLion.webp" alt="아기사자" className="work-img" />
        <div className="work-desc">
          <div className="work-title">13기 아기사자 <br />프론트엔드</div>
          <div className="work-divider"></div>
        </div>
      </div>

      {/* 수학과 영역 */}
      <div className="work-row">
        <img src="/images/Math.webp" alt="수학과독수리" className="work-img" />
        <div className="work-desc">
          <div className="work-title">[관심분야] <br />수학 <br />소프트웨어 개발 <br />양자컴퓨팅</div>
        </div>
      </div>
    </div>
  );
}



export default Work;