import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import demandeDevisImg from "../../images/demande_devis.jpg";
import validator from "validator";
import axios from "axios";
import VerificationCodeForm from "./VerificationCodeForm";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";

const API_BASE = process.env.REACT_APP_API_BASE;

function DemanderDevisForm() {
  const [error, setError] = useState("");
  const [code, setCode] = useState(0);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function sendCode(receiverEmail, receiverName) {
    return await axios.post(`${API_BASE}sendVerificationCode.php`, {
      receiverEmail,
      receiverName,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!sending) {
      if (!nom.trim() || !email || !tel || !message.trim()) {
        return setError("Veuillez remplir tous les champs");
      }

      if (nom > 100) {
        return setError("Le nom doit contenir au maximum 100 caractères");
      }

      if (!validator.isEmail(email)) {
        return setError("Veuillez entrer un email valide");
      }

      if (!validator.isNumeric(tel) || tel.length != 8) {
        return setError("Le numéro de téléphone doit être formé de 8 chiffres");
      }

      setError("");

      setSending(true);
      sendCode(email, nom.trim())
        .then((res) => {
          setSending(false);
          if (res.data.indexOf("sent--") === 0) setCode(JSON.parse(res.data.slice(6, res.data.length)).code);
          else setError("Une erreur s'est produite lors de l'envoi du message, veuillez réessayer");
        })
        .catch(() => {
          setSending(false);
          setError("Une erreur s'est produite lors de l'envoi du message, veuillez réessayer");
        });
    }
  }

  return (
    <div className="py-20 scr800:px-4">
      {code ? (
        // the code form, only appears when we send a verification email
        <VerificationCodeForm code={code} email={email} nom={nom.trim()} tel={tel} message={message.trim()} />
      ) : (
        <div
          className={`max-w-[1200px] m-auto w-full rounded-2xl bg-gradient-to-r from-blue-800 to-sky-500 flex scr800:flex-row flex-col gap-6 scr800:px-6 relative`}
        >
          <div className="scr800:w-5/12 w-full py-14 px-6">
            <h1 className="font-teko text-5xl font-bold text-white text-center">
              Vous avez besoin d'un travail professionnel?
            </h1>
            <p className="font-dm_sans text-white text-center mt-4 text-xl ">
              Vous êtes exactement au bon endroit
              <br />
              N'hésitez pas à nous contacter
              <br />
              Notre équipe est toujours là pour vous répondre dans environ 24 heures
            </p>
            <h3 className="font-teko text-2xl font-semibold text-black text-center mt-8">Nous trouvons sur</h3>
            <ul className="flex gap-3 mt-1 w-fit m-auto">
              <a
                href="https://www.facebook.com/tshiil"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" color="darkblue" />
              </a>
              <a
                href="https://www.instagram.com/tshiilservices"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" color="darkblue" />
              </a>
              <a
                href="https://www.linkedin.com/in/tshiil-services-7b718b23b"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="darkblue" />
              </a>
            </ul>
            <img src={demandeDevisImg} alt="" className="w-full rounded-lg mt-8" />
          </div>
          <div className="scr800:w-7/12 w-full my-10 p-8 rounded-3xl outline-none bg-[rgba(255,255,255,.3)] shadow-[0_10px_10px_0_rgb(28,9,80,9%)]">
            <form onSubmit={handleSubmit}>
              <label htmlFor="lastNameInp" className="block pl-2">
                Nom:
              </label>
              <input
                type="text"
                id="lastNameInp"
                className="text-xl font-dm_sans border border-slate-200 rounded-xl px-4 py-3 outline-0 mt-1 w-full"
                placeholder="Nom"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <label htmlFor="emailInp" className="block pl-2 mt-4">
                Email:
              </label>
              <input
                type="email"
                id="emailInp"
                className="text-xl font-dm_sans border border-slate-200 rounded-xl px-4 py-3 outline-0 mt-1 w-full"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="telInp" className="block pl-2 mt-4">
                Numéro de téléphone:
              </label>
              <input
                type="tel"
                id="telInp"
                className="text-xl font-dm_sans border border-slate-200 rounded-xl px-4 py-3 outline-0 mt-1 w-full"
                placeholder="Téléphone"
                required
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <label htmlFor="message" className="block pl-2 mt-4">
                Message:
              </label>
              <textarea
                placeholder="Message"
                id="message"
                className="resize-none text-xl font-dm_sans border border-slate-200 rounded-xl p-4 outline-0 mt-1 w-full"
                rows={8}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {error && (
                <div className="bg-red-600 text-white px-4 py-3 rounded-lg relative flex items-center">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" size="xl" />
                  {error}
                </div>
              )}
              <div className="relative">
                <i className={`absolute top-[50%] right-10 translate-y-[-40%] ${!sending ? "hidden" : ""}`}>
                  <ReactLoading type="spinningBubbles" color="aqua" height={30} width={30} />
                </i>
                <input
                  type="submit"
                  value="Envoyer"
                  className={`text-xl font-cera font-bold rounded-full px-4 py-3 mt-2 w-full bg-blue-700 uppercase text-white ${
                    sending ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemanderDevisForm;
