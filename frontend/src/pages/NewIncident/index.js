import React, { useState } from 'react';
import logoImg from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';


export default function NewIncident() {
    return (
        <div className="new-incident-container  ">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />
                    <h1> Cadastrar novo caso </h1>
                    <p> Descreva o caso detalhadamente para encontrar um donater que possa te ajudar. </p>

                    <Link className="back-link" to={"/profile"}>
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para Home
                </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor que falta para meta" />

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>

    );
}