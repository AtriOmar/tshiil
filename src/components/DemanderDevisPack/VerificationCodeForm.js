import React, { useEffect, useRef, useState } from "react";
import validator from "validator";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import bcrypt from "bcryptjs";
import ReactLoading from "react-loading";

const API_BASE = process.env.REACT_APP_API_BASE;

function VerificationCodeForm({ code, email, nom, tel, message }) {
  const [userCode, setUserCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const codeRef = useRef(null);
  const [sending, setSending] = useState(false);

  // scrolling into the code input's view when it mounts
  useEffect(() => {
    codeRef.current && codeRef.current.scrollIntoView({ block: "center", inline: "nearest" });
  }, [codeRef]);

  async function verifyCode(e) {
    e.preventDefault();
    if (!sending) {
      if (userCode.length !== 6 || !validator.isNumeric(userCode)) {
        return setError("Le code de validation doit être formé de 6 chiffres");
      }

      code = "$2a" + code.slice(3, code.length);

      const codeIsCorrect = bcrypt.compareSync(userCode, code);

      if (!codeIsCorrect) {
        return setError("Veuillez vérifier le code");
      }

      setSending(true);
      axios
        .post(`${API_BASE}sendMessage.php`, {
          receiverEmail: email,
          receiverName: nom,
          receiverTel: tel.substring(0, 2) + " " + tel.substring(2, 5) + " " + tel.substring(5, 8),
          message: message.replace(/\n/g, "<br/>"),
          subject: `Nouvelle demande de devis`,
        })
        .then((res) => {
          setSending(false);
          if (res.data.indexOf("sent") === 0) setSuccess(true);
          else setError("Une erreur s'est produite lors de l'envoi du message, veuillez réessayer");
        })
        .catch(() => {
          setSending(false);
          setError("Une erreur s'est produite lors de l'envoi du message, veuillez réessayer");
        });
    }
  }
  return (
    <div className="max-w-[600px] p-10 m-auto bg-gradient-to-r from-blue-800 to-sky-500 rounded-2xl">
      {success ? (
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-lg text-slate-900 font-cera text-center">
            Votre demande a été envoyé avec succès, nous vous répondrons dès que possible dans les 24 heures
          </h1>
          <FontAwesomeIcon icon={faCircleCheck} color="limegreen" size="4x" className="mt-4" />
        </div>
      ) : (
        <form className="flex flex-col items-center " onSubmit={verifyCode}>
          <h1 className="font-medium text-lg text-slate-900 font-cera text-center">
            Pour vérifier votre email, Nous avons envoyé un code à 6 chiffres à "{email}", veuillez vérifier votre boite
            aux lettres et entrez le code dans la case ci-dessous pour compléter votre demande:
          </h1>
          <input
            type="text"
            id="lastNameInp"
            className="text-xl font-dm_sans border border-slate-200 rounded-xl px-4 py-3 outline-0 mt-4 w-60"
            placeholder="Code"
            required
            autoComplete="off"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            ref={codeRef}
          />
          <div className="relative">
            <i className={`absolute top-[50%] right-5 translate-y-[-25%] ${!sending ? "hidden" : ""}`}>
              <ReactLoading type="spinningBubbles" color="blue" height={30} width={30} />
            </i>
            <input
              type="submit"
              value="Valider"
              className={`text-2xl font-cera font-bold rounded-full px-4 py-3 mt-4 w-60 bg-sky-400 uppercase text-white ${
                sending ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          </div>
          {error && (
            <div className="bg-red-600 text-white px-4 py-3 mt-2 rounded-lg relative flex items-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" size="xl" />
              {error}
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default VerificationCodeForm;
