import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.jpg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const subId = localStorage.getItem('subId');
    const subName = localStorage.getItem('subName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: subId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [subId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: subId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span> Bem vindo, {subName} </span>

                <Link className="button" to={"/incidents/new"}>Cadastrar novo caso </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#6441a5" />
                </button>
            </header>

            <h1> Casos Cadastrados </h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong> CASO: </strong>
                        <p> {incident.title} </p>

                        <strong> DESCRIÇÃO: </strong>
                        <p> {incident.description}</p>

                        <strong> VALOR: </strong>
                        <p> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} </p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            < FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}