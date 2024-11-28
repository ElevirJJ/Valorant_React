import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../style/Carrocel.scss";


const Carrocel = () => {
  const [imagens] = useState([
    { img: "/img/VALORANT-Phoenix.jpg", title: "Phoenix", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Raze.jpg", title: "Raze", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Sage.jpg", title: "Sage", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Reyna.jpg", title: "Reyna", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Skye.jpg", title: "Skye", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Sova.jpg", title: "Sova", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Viper.jpg", title: "Viper", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Yoru.jpg", title: "Yoru", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT_Deadlock.jpg", title: "Deadlock", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Omen.jpg", title: "Omen", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-NEON.jpg", title: "Neon", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Killjoy.jpg", title: "Killjoy", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Astra.jpg", title: "Astra", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Breach.jpg", title: "Breach", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Brimstone-1.jpg", title: "Brimstone", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Chamber.jpg", title: "Chamber", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Cypher.jpg", title: "Cypher", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-FADE.jpeg", title: "Fade", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-GEKKO.jpg", title: "Gekko", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-HARBOR.jpg", title: "Harbor", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-ISO.png", title: "ISO", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Jett.jpg", title: "Jett", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
    { img: "/img/VALORANT-Kayo.jpg", title: "Kayo", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempore assumenda, sed tempora illum, ratione veritatis nihil expedita animi." },
  ]);

  const [posicao, setPosicao] = useState(0);

  const prev = () => {
    setPosicao(posicao === 0 ? imagens.length - 1 : posicao - 1)
  }

  const next = () => {
    setPosicao((posicao + 1) % imagens.length)
  }


  return (
    <div className="carrocel">
      <div className="assunto">
        <div className="conteudo">
          <h1 key={posicao} className="conteudo">{imagens[posicao].title}</h1>
        </div>
        <div className="description">
          <p key={posicao} className="description">{imagens[posicao].desc}</p>
        </div>
      </div>

      <div className="quadros">
        <img src={imagens[posicao].img} />
      </div>

      <div className="btn">
        <button className="lef"><FaArrowLeft onClick={prev} /></button>
        <button className="direita"><FaArrowRight onClick={next} /></button>
      </div>
    </div>
  );
};

export default Carrocel;
