import "./footer.sass";
import Logo from "../../assets/malvs-logo-branca-1.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="columns">
          <div className="logo-footer column">
            <img className="logo-footer" src={Logo} alt="logo providentia 2" />
            <p>
              Oferecemos soluções personalizadas e de alta qualidade para
              proteger sua propriedade intelectual.
            </p>
          </div>
          <div className="services-footer column">
            <h3>Serviços</h3>
            <ul>
              <li>
                <p>Registro de marcas</p>
              </li>
              <li>
                <p>Criação de identidade visual</p>
              </li>
              <li>
                <p>Propriedade Intelectual</p>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com/company/providentia-consultoria/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/providentiaconsultoria/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/providentiaconsultoria/"
                  target="_blank"
                  rel="noreferrer"
                >
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
