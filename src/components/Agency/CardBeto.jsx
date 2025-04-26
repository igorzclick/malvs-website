import "./aboutUs.sass";
import profile1 from "../../assets/alberto-profile.png";

const CardBeto = () => {
  return (
    <div className="card-about">
      <div className="cover-photo">
        <img className="profile" src={profile1} alt="profile" />
      </div>
      <div className="profile-name">Alberto Souza</div>
      <div className="position">CEO | FOUNDER</div>
      <p className="about">
        Designer | Desenvolvedor |<br />
        Product Owner
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/albertoasouza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
};

export default CardBeto;
