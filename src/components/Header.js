import React from "react";

function Header() {
  return (
    <div className="header">
      <svg
        className="logos"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none" />
        <rect
          width="96"
          height="48"
          x="80"
          y="64"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <rect
          width="192"
          height="160"
          x="32"
          y="48"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          rx="8"
          transform="rotate(90 128 128)"
        />
        <circle cx="88" cy="148" r="12" />
        <circle cx="128" cy="148" r="12" />
        <circle cx="168" cy="148" r="12" />
        <circle cx="88" cy="188" r="12" />
        <circle cx="128" cy="188" r="12" />
        <circle cx="168" cy="188" r="12" />
      </svg>
      <h1>React Counter</h1>
    </div>
  );
}

export default Header;
