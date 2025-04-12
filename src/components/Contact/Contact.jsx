// import emailjs from "@emailjs/browser";
import "./contact.sass";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  {
    /*emailjs*/
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_srrrvdu",
      "template_jddxgyw",
      form.current,
      "K5dO50g6Xjx8V0LmF"
    );
    e.target.reset();
  };

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
      <section ref={ref} className="contact-container" id="contact">
        <h2 className="section-title">CONTATO</h2>
        <p className="section-subtitle">ENTRE EM CONTATO CONOSCO!</p>
        <div className="contact-container container grid">
          <div className="contact-content">
            <h3 className="contact-title">Entre em Contato</h3>
            {/*left cards*/}
            <div className="contact-info">
              {/*card 1*/}
              <div className="contact-card">
                <i className="bx bx-mail-send contact-icon"></i>

                <h3 className="contact-card-title">Email</h3>
                <span className="contact-card-data">
                  albertosouza16.contato@gmail.com
                </span>
                <a
                  href="mailto:albertosouza16.contato@gmail"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
              {/*card 2*/}
              <div className="contact-card">
                <i className="bx bxl-whatsapp contact-icon"></i>

                <h3 className="contact-card-title">WhatsApp</h3>
                <span className="contact-card-data">+55 11 91603-3154</span>
                <a
                  href="https://wa.me/5511916033154"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
              {/*card 3*/}
              <div className="contact-card">
                <i className="bx bxl-linkedin contact-icon"></i>

                <h3 className="contact-card-title">LinkedIn</h3>
                <span className="contact-card-data">
                  www.linkedin.com/in/albertoasouza
                </span>
                <a
                  href="https://www.linkedin.com/in/alberto-souza-b4a1451b5/"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-content">
            <h3 className="contact-title">Escrever mensagem.</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {/*input 1*/}
              <div className="contact-form-div">
                <label className="contact-form-tag">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="contact-form-input"
                  placeholder="Insira seu nome"
                />
              </div>
              {/*input 2*/}
              <div className="contact-form-div">
                <label className="contact-form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact-form-input"
                  placeholder="Insira seu email"
                />
              </div>
              {/*input 3*/}
              <div className="contact-form-div contact-form-area">
                <label className="contact-form-tag">Mensagem</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact-form-input"
                  placeholder="Escreva sua mensagem"
                ></textarea>
              </div>

              <div className="button-contact">
                <a
                  aria-label="chat whatsapp"
                  href="https://wa.me/5511"
                  className="button-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  ENVIAR MENSSAGEM
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
