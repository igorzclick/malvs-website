import { useState } from "react";
import "./navigation.sass";
import Logo from "../../assets/malvs-logo-branca-1.png";

function Header() {
  /*header color change*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*menu toggle*/
  const [Toggle, showMenu] = useState(false);

  /*active link*/
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className="header">
      <nav className="nav container">
        <h1 className="logo" aria-label="Malvs Agência Digital">
          <a href="index.html" className="nav-logo">
            <img src={Logo} alt="Logo Malvs" />
          </a>
        </h1>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                aria-label="home"
                href="#header"
                onClick={() => setActiveNav("#header")}
                className={
                  activeNav === "#header" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bx bx-home-alt nav-icon" alt="home"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a
                aria-label="serviços"
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="bx bx-trending-up nav-icon" alt="serviços"></i>{" "}
                Serviços
              </a>
            </li>

            <li className="nav-item">
              <a
                aria-label="cases"
                href="#cases"
                onClick={() => setActiveNav("#cases")}
                className={
                  activeNav === "#cases" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bx bxs-layer nav-icon" alt="cases"></i> Cases
              </a>
            </li>

            <li className="nav-item">
              <a
                aria-label="agencia"
                href="#agency"
                onClick={() => setActiveNav("#agency")}
                className={
                  activeNav === "#agency" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bx bx-code nav-icon"></i> Agência
              </a>
            </li>

            <li className="nav-item">
              <a
                aria-label="chat whatsapp"
                href="#contact"
                className="nav-link"
              >
                <i className="bx bxl-whatsapp nav-icon" alt="chat whatsapp"></i>{" "}
                Contato
              </a>
            </li>
          </ul>
          {/*responsive button*/}
          <i
            className="bx bx-x nav-close"
            alt="fechar"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        {/*responsive menu*/}
        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-menu" alt="menu"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
