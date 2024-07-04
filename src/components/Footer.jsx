import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-100">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;