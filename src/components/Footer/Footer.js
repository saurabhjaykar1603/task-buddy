import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-body">
          <div className="footer-text">
            <p className="footer-text-p">To Do App || Created By @Saurabh Jaykar</p>
          </div>
          <div className="footer-github-link">
           <span>See on Github 👉🏻</span> <a href="https://github.com/saurabhjaykar1603/todo-app" type="blank">https://github.com/saurabhjaykar1603/todo-app</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
