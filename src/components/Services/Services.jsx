import "./services.sass";
import cardImg1 from "../../assets/codigo.png";
import cardImg2 from "../../assets/pedir-servico.png";
import cardImg3 from "../../assets/bot.png";
import cardImg4 from "../../assets/paleta.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <section ref={ref} className="services-container container" id="services">
        <div className="section-title-position">
          <h2 className="section-title">NOSSOS SERVIÇOS</h2>
          <p className="section-subtitle">
            CONHEÇA MAIS SOBRE OS SERVIÇOS DE NOSSA AGÊNCIA
          </p>
        </div>
        <div className="cards-services grid">
          {/* card 1 */}
          <div className="card-services">
            <div className="services-img">
              <img className="icon-services" src={cardImg1} alt="profile" />
            </div>
            <div className="card-services-title">
              <span className="card-title">Sites Responsivos</span>
            </div>
            <div className="card-services-description">
              <p className="card-description">
                Desenvolvimento do seu site de forma 100% adaptável para todas
                as e seguindo as regras do Google para uma melhor otimização e
                desempenho.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card-services">
            <div className="services-img">
              <img className="icon-services" src={cardImg2} alt="profile" />
            </div>
            <div className="card-services-title">
              <span className="card-title">Apoio Tecnológico</span>
            </div>
            <div className="card-services-description">
              <p className="card-description">
                Desenvolvimento do seu site de forma 100% adaptável para todas
                as e seguindo as regras do Google para uma melhor otimização e
                desempenho.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card-services">
            <div className="services-img">
              <img className="icon-services" src={cardImg3} alt="profile" />
            </div>
            <div className="card-services-title">
              <span className="card-title">Chatbots</span>
            </div>
            <div className="card-services-description">
              <p className="card-description">
                Desenvolvimento do seu site de forma 100% adaptável para todas
                as e seguindo as regras do Google para uma melhor otimização e
                desempenho.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card-services">
            <div className="services-img">
              <img className="icon-services" src={cardImg4} alt="profile" />
            </div>
            <div className="card-services-title">
              <span className="card-title">Branding</span>
            </div>
            <div className="card-services-description">
              <p className="card-description">
                Desenvolvimento do seu site de forma 100% adaptável para todas
                as e seguindo as regras do Google para uma melhor otimização e
                desempenho.
              </p>
            </div>
          </div>
        </div>
        <div className="button-services">
          <a
            aria-label="chat whatsapp"
            href="https://wa.me/5511"
            className="button-link"
            target="_blank"
            rel="noreferrer"
          >
            CONHEÇA NOSSOS SERVIÇOS!
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
