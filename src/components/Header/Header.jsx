/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "./header.sass";
import Navigation from "./Navigation";
import Scroll from "./Scroll";

const Header = () => {
  // animação de escrita
  const words = ["LEADS.", "INOVAÇÃO.", "REALIDADE."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && text.length < words[index].length) {
      timeout = setTimeout(() => {
        setText(words[index].substring(0, text.length + 1));
      }, 200);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(words[index].substring(0, text.length - 1));
      }, 100);
    } else if (!isDeleting && text.length === words[index].length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <header className="header-banner" id="header">
      <nav>
        <Navigation />
      </nav>
      <div className="banner">
        <div className="banner-container container">
          <div className="banner-texts">
            <div className=" animate-blink">
              <h2 className="cta">
                <span>TRANSFORMANDO IDEIAS EM </span>
                <span className="animation-text">{text}</span>
              </h2>
            </div>
            <p className="banner-subtitle">
              Descubra estratégias inovadoras que transformam sua presença
              online. Fale conosco e agende sua consultoria gratuita para
              alavancar o crescimento da sua marca no mundo digital!
            </p>
          </div>
          <div className="button-header">
            <a
              aria-label="chat whatsapp"
              href="https://wa.me/5511"
              className="button-link"
              target="_blank"
              rel="noreferrer"
            >
              VENHA PARA O DIGITAL!
            </a>
          </div>

          <div className="home-img"></div>

          <Scroll />
        </div>
      </div>
    </header>
  );
};

export default Header;
