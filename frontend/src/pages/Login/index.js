import React from 'react';
import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

import './styles.css';

import logoImg from '../../assets/logo.jpg';
import patreon from '../../assets/agora.jpg';


export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form>
                    <h1> Faça seu login </h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar </button>
                    <Link className="back-link" to={"/register"}>
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={patreon} alt="Patreon" />
        </div>
    );
}