import React from 'react';
import logoImg from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span> Bem vindo, Patreon </span>
                <Link className="button" to={"/incidents/new"}>Cadastrar novo caso </Link>
                <button typer="button">
                    <FiPower size={18} color="#6441a5" />

                </button>
            </header>
            <h1>                 Casos Cadastrados             </h1>
            <ul>
                <uli>
                    <strong> CASO: </strong>
                    <p> Caso Teste </p>
                </uli>
            </ul>

        </div>
    );
}