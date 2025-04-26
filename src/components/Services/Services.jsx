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
          <h2 className="section-title">SERVIÇOS OFERECIDOS</h2>
          <p className="section-subtitle">
            TECNOLOGIA, CRIATIVIDADE E ESTRATÉGIA TRABALHANDO JUNTAS PARA
            ATRAIR, ENGAJAR E CONVERTER.
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
                Projetamos sites elegantes, intuitivos e 100% responsivos, com
                performance impecável em qualquer dispositivo, cada detalhe
                pensado para impressionar e converter.
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
                Automatize, otimize e simplifique seus processos com soluções
                tecnológicas sob medida para o seu negócio.
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
                Implantamos assistentes virtuais com alto nível de
                personalização, prontos para oferecer atendimento ágil,
                humanizado e eficiente, dia e noite.
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
                Construímos identidades visuais com propósito. Do conceito ao
                posicionamento, traduzimos a essência da sua marca em uma
                presença marcante e sofisticada.
              </p>
            </div>
          </div>
        </div>
        <div className="button-services">
          <a
            aria-label="chat whatsapp"
            href="https://wa.me/5511999067335?text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Malv's%20Ag%C3%AAncia%20Digital."
            className="button-link"
            target="_blank"
            rel="noreferrer"
          >
            VENHA PARA O DIGITAL!
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
