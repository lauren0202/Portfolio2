import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '32px',
    padding: '8px 16px',
    borderRadius: '999px',
    border: '1.7px solid #e5d6c9',
    background: '#fff9f8',
    color: '#bcb2a8',
    fontWeight: 700,
    fontSize: '1.13rem',
    boxShadow: '0 3px 12px rgba(180,140,120,0.10)',
    cursor: 'pointer',
    opacity: 0.8,
    zIndex: 1000,
    transition: 'background 0.2s, box-shadow 0.2s, transform 0.12s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const arrowStyle = {
    fontSize: "1.4rem",
    color: "#bcb2a8",
    fontWeight: 800,
    transition: "transform 0.2s"
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        style={buttonStyle}
        aria-label="맨 위로 이동"
        onMouseDown={e => e.preventDefault()}
      >
        <span style={arrowStyle}>⇧</span>
        
      </button>
    )
  );
}

export default ScrollToTopButton;
