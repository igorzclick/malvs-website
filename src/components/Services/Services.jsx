import './services.sass';
import cardImg1 from '../../assets/codigo.png';
import cardImg2 from '../../assets/pedir-servico.png';
import cardImg3 from '../../assets/bot.png';
import cardImg4 from '../../assets/paleta.png';

const Services = () => {
  return (
   <section className="services-container container">
             <div className="section-title-position">
                 <h2 className="section-title">NOSSOS SERVIÇOS</h2>
                 <p className="section-subtitle">CONHEÇA MAIS SOBRE OS SERVIÇOS DE NOSSA AGÊNCIA</p>
             </div>
             <div className="cards-services grid">
              {/* card 1 */}
              <div className="card-services">
                  <div className="services-img">
                      <img className="icon-services" src={cardImg1} alt="profile" />
                  </div>
                  <div className="card-services-title">
                        <span className="card-title">
                            Sites Responsivos
                        </span>
                  </div>
                  <div className="card-services-description">
                    <p className="card-description">
                        Desenvolvimento do seu site de forma 100% adaptável para todas as 
                        e seguindo as regras do Google para uma melhor otimização e desempenho.
                    </p>
                  </div>
              </div>
              {/* card 2 */}
              <div className="card-services">
                  <div className="services-img">
                      <img className="icon-services" src={cardImg2} alt="profile" />
                  </div>
                  <div className="card-services-title">
                      <span className="card-title">
                          Apoio Tecnológico
                      </span>
                  </div>
                  <div className="card-services-description">
                      <p className="card-description">
                          Desenvolvimento do seu site de forma 100% adaptável para todas as
                          e seguindo as regras do Google para uma melhor otimização e desempenho.
                      </p>
                  </div>
              </div>
              {/* card 3 */}
              <div className="card-services">
                  <div className="services-img">
                      <img className="icon-services" src={cardImg3} alt="profile" />
                  </div>
                  <div className="card-services-title">
                      <span className="card-title">
                          Chatbots
                      </span>
                  </div>
                  <div className="card-services-description">
                      <p className="card-description">
                          Desenvolvimento do seu site de forma 100% adaptável para todas as
                          e seguindo as regras do Google para uma melhor otimização e desempenho.
                      </p>
                  </div>
              </div>
              {/* card 4 */}
              <div className="card-services">
                  <div className="services-img">
                      <img className="icon-services" src={cardImg4} alt="profile" />
                  </div>
                  <div className="card-services-title">
                      <span className="card-title">
                          Branding
                      </span>
                  </div>
                  <div className="card-services-description">
                      <p className="card-description">
                          Desenvolvimento do seu site de forma 100% adaptável para todas as
                          e seguindo as regras do Google para uma melhor otimização e desempenho.
                      </p>
                  </div>
              </div>
             </div>
             
       </section>
  )
}

export default Services