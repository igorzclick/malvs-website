import "./footer.sass";
import LogoFooter from "../../assets/malvs-logo-branca-1.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="columns">
          <div className="logo-footer column">
            <img
              className="logo-footer"
              src={LogoFooter}
              alt="logo providentia 2"
            />
            <p>
              Somos uma empresa focada em lapidar a presença digital de
              pequenas, médias ou grandes empresas, com estratégias e soluções
              personalizadas que combinam criatividade, dados e tecnologia.
            </p>
          </div>
          <div className="services-footer column">
            <h3>Serviços</h3>
            <ul>
              <li>
                <p>Desenvolvimento de sites</p>
              </li>
              <li>
                <p>Criação de identidade visual</p>
              </li>
              <li>
                <p>Estratégias de marketing</p>
              </li>
              <li>
                <p>Apoio tecnológico</p>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com/company/malvs-ag%C3%AAncia-digital/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/malvsdigital/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <i className="bx bxl-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="copy">
          <p>
            © Copyright 2025 – todos os direitos reservados – Malv's Agência
            Digital CNPJ: 59.368.353/0001-91
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
