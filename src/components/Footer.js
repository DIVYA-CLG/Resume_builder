import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f2f2f2",
    padding: "40px",
    marginTop: "20px",
    textAlign: "center",
    borderTop: "1px solid #ccc",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;