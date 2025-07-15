import React from "react";

function Footer() {
  const footerStyle = {
    width: "100%",
    textAlign: "right",
    fontSize: "1.05rem",
    color: "#bcb2a8",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    letterSpacing: "0.1em",
    opacity: 0.6,
    userSelect: "none",
    pointerEvents: "none",
    marginTop: "auto",   // sticky footer 핵심!
    padding: "0 32px 20px 0"  // 우측, 아래 패딩
  };

  return (
    <footer style={footerStyle}>
      PORTFOLIO OF MIN
    </footer>
  );
}

export default Footer;

