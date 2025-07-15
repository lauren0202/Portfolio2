// props
import { useState } from "react";

function ChangeTab({ tabs }) {
  const [tab, setTab] = useState(Object.keys(tabs)[0]);

  // 각 버튼의 색깔을 키로 관리
  const tabButtonColors = {
    NARUTO: { background: "#ffe066", color: "#3b3300" },         // 노랑
    JUJUTSUKAISEN: { background: "#19305c", color: "#fff" },     // 남색
    ATTACKONTITAN: { background: "#5d2323", color: "#ffe8e8" },  // 검붉은색
    // 필요시 고양이도 추가
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        marginBottom: "18px"
      }}>
        {Object.keys(tabs).map((key) => {
          // 버튼 색상
          const btnColors = tabButtonColors[key] || { background: "#f6f6f6", color: "#444" };

          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                minWidth: "90px",
                fontWeight: tab === key ? "bold" : "normal",
                fontSize: "1.08rem",
                border: "1.5px solid #ddd4cc",
                borderRadius: "11px",
                padding: "12px 16px",
                margin: "0",
                background: btnColors.background,
                color: btnColors.color,
                outline: tab === key ? "2px solid #bcb2a8" : "none",
                boxShadow: tab === key ? "0 2px 8px rgba(80,70,60,0.09)" : "none",
                cursor: "pointer",
                transition: "all 0.15s"
              }}
            >
              {tabs[key].label}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: "1em" }}>
        {tabs[tab].content}
      </div>
    </div>
  );
}

export default ChangeTab;
