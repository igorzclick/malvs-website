import "./aboutUs.sass";
import profile1 from "../../assets/alberto.png";

const CardIgor = () => {
  return (
    <div className="card-about">
      <div className="cover-photo">
        <img className="profile" src={profile1} alt="profile" />
      </div>
      <div className="profile-name">Igor Rozendo</div>
      <div className="position">CO-CEO</div>
      <p className="about">
        Gestor de Tráfego | Desenvolvedor |<br />
        Product Manager
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/igor-almeida-5b4b61211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
}

export default CardIgor