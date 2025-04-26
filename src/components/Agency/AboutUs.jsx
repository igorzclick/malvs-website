import "./aboutUs.sass";
import Card from './CardBeto'
import Card2 from './CardIgor'
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutUs = () => {
  // animation scroll
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
      <section ref={ref} className="about-container container">
        <div className="cards-about grid">
          <div className="about-left-section">
            <div className="section-title-position">
              <h2 className="about-title">NOSSA EQUIPE</h2>
              <p className="about-subtitle">SAIBA MAIS SOBRE NÓS!</p>
              <p className="about-description">
                Descubra a excepcional equipe que compõe a nossa empresa,
                formada por profissionais apaixonados e especializados em
                diversas áreas. Cada membro traz consigo uma vasta experiência e
                um compromisso incansável com a excelência. Estamos prontos para
                colaborar, inovar e transformar suas ideias em realidade.
                Conheça mais sobre os talentos que impulsionam o sucesso dos
                nossos projetos.
              </p>
            </div>
          </div>
          <Card />
          <Card2 />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
