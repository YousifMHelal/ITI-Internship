import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <h2>Contact us</h2>
        <form>
          <div>
            <input type="text" placeholder="your name" />
            <input type="text" placeholder="your email" />
          </div>
          <input type="password" placeholder="your pasword" />
          <textarea rows={8} placeholder="contact us" /> 
          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
