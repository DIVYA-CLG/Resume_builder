import React from "react";

function ContactPage() {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "none",
    borderBottom: "2px solid #ccc",
    fontSize: "16px",
  };

  const labelStyle = {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "#cc33ff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#fff",
    color: "#cc33ff",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Contact Us</h1>
      <form style={formStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input type="text" id="name" name="name" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input type="email" id="email" name="email" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea id="message" name="message" style={inputStyle}></textarea>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.color = buttonStyle.color;
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;