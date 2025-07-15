import React from "react";
import ChangeTab from "../components/ChangeTab";
import "./Info.css";


function Info() {
  // 애니 탭 데이터
  const animeTabs = {
    NARUTO: {
      label: "나루토",
      content: (
        <div className="tab-content">
          <img
            src="/images/Naruto.webp"
            alt="나루토"
            className="tab-image"
          />
          <h2>나루토</h2>
          <p>불굴의 의지와 열정을 가진 닌자! 성장과 우정의 이야기. 눈물 좔좔</p>
        </div>
      ),
    },
    JUJUTSUKAISEN: {
      label: "주술회전",
      content: (
        <div className="tab-content">
          <img
            src="/images/JujutsuKaisen.webp"
            alt="주술회전"
            className="tab-image"
          />
          <h2>주술회전</h2>
          <p>현대와 오컬트가 만난 세계에서 주술사가 저주와 싸우는 이야기.</p>
        </div>
      ),
    },
    ATTACKONTITAN: {
      label: "진격의 거인",
      content: (
        <div className="tab-content">
          <img
            src="/images/AttackofTitan.webp"
            alt="진격의 거인"
            className="tab-image"
          />
          <h2>진격의 거인</h2>
          <p>거인과 인간의 치열한 전투, 충격적인 반전과 스토리. 대명작..</p>
        </div>
      ),
    },
  };

  // 고양이 탭 데이터
  const catTabs = {
    CATDoyu: {
      label: "고양이 두유",
      content: (
        <div className="tab-content">
          <img
            src="/images/doyu.jpg"
            alt="고양이 두유"
            className="tab-image"
          />
          <h2>두유</h2>
          <p>미묘 삼색냥</p>
        </div>
      ),
    },
    CATKong: {
      label: "고양이 콩이",
      content: (
        <div className="tab-content">
          <img
            src="/images/kong.jpg"
            alt="고양이 콩이"
            className="tab-image"
          />
          <h2>콩이</h2>
          <p>개냥이 러시안블루</p>
        </div>
      ),
    },
  };


  return (
    <div>
      <p className="intro-text">안녕하세용 연세대 수학과 23학번 오따꾸입니당</p>

      <section className="anime-section">
        <p>최애 애니메이션 소개</p>
        <ChangeTab tabs={animeTabs} />
      </section>

      <section className="cat-section">
        <p>반려묘</p>
        <ChangeTab tabs={catTabs} />
      </section>
    </div>
  );
}

export default Info;
