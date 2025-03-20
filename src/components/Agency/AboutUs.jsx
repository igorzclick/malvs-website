import './aboutUs.sass';
import profile1 from '../../assets/alberto.png';

const AboutUs = () => {
  return (
    <div className="about-container container">
          <div className="agency-texts">
              <h2 className="section-title">IDEALIZAÇÃO</h2>
              <p className="section-subtitle">CONHEÇA MAIS SOBRE OS IDEALIZADORES DA NOSSA AGÊNCIA</p>
          </div>
          <div className="cards grid">
              <div className="card">
                  <div className="cover-photo">
                      <img className="profile" src={profile1} alt="profile" />
                  </div>
                  <div className="profile-name">Alberto Souza</div>
                  <div className="position">CEO</div>
                  <p className="about">Designer | Desenvolvedor |<br/>Product Owner</p>
                  <div>
                      <i className='bx bxl-linkedin-square'></i>
                  </div>
              </div>
             {/* card 2 */}
              <div className="card">
                  <div className="cover-photo">
                      <img className="profile" src={profile1} alt="profile" />
                  </div>
                  <div className="profile-name">Igor Rozendo</div>
                  <div className="position">CO-CEO</div>
                  <p className="about">Gestor de Tráfego | Desenvolvedor |<br />Product Manager</p>
                  <div>
                      <i className='bx bxl-linkedin-square'></i>
                  </div>
              </div>
          </div>
    </div>
      
  )
}

export default AboutUs;