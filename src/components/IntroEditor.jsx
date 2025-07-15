import { useRef, useState } from "react";
import "./IntroEditor.css";

function IntroEditor() {
  const inputRef = useRef(null);
  const [intro, setIntro] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="intro-editor-wrap">
      <input
        ref={inputRef}
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        placeholder="한 줄 소개를 입력하세요"
        className="intro-input"
      />
      <button onClick={focusInput} className="intro-btn">
        입력창으로 이동
      </button>
      <p className="intro-preview">
        한 줄 소개: <span>{intro}</span>
      </p>
    </div>
  );
}

export default IntroEditor;