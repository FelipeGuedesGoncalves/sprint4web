"use client"
// ======= IMPORTAÇÕES E ESTILO DO COMPONENTE =======

import React, { useState, useEffect } from 'react';
import './Perfil.scss';

export default function Perfil() {
  const [perfilData, setPerfilData] = useState({
    nm_completo: '',
    telefone: '',
    email: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    endereco: '',
    imagemPerfil: '/imagem_ausente2.png', // caminho relativo da imagem
  });

  const [inputsBloqueados, setInputsBloqueados] = useState(true);
  const [nm_completoExibido, setnm_completoExibido] = useState('Cliente Porto');

useEffect(() => {
  // Faz uma requisição GET para obter os dados do cliente do servidor
  fetch('http://localhost:3001/cliente', {
    method: 'GET',
  })
    .then(resp => resp.json())
    .then(resp => {
      // Verifica se a resposta está vazia
      if (Object.keys(resp).length === 0) {
        // Se a resposta estiver vazia, define o nome exibido como 'Cliente Porto'
        setnm_completoExibido('Cliente Porto');
      } else {
        // Se houver dados na resposta, atualiza o nome exibido e os dados do perfil
        setnm_completoExibido(resp.nm_completo);
        setPerfilData(resp);
      }
    })
    .catch(error => {
      // Captura e registra qualquer erro ocorrido durante a requisição
      console.error('Erro ao obter dados do cliente:', error);
    });
}, []);


  const handleInputChange = (event, campo) => {
    if (!inputsBloqueados) {
      setPerfilData({ ...perfilData, [campo]: event.target.value });
    }
  };

  const handleGeneroChange = (event) => {
    if (!inputsBloqueados) {
      setPerfilData({ ...perfilData, genero: event.target.value });
    }
  };

  const handleImagemChange = (event) => {
    const novaImagem = URL.createObjectURL(event.target.files[0]);
    setPerfilData({ ...perfilData, imagemPerfil: novaImagem });
  };

  const handleBloquearInputs = () => {
    setInputsBloqueados(true);
  };

  const handleDesbloquearInputs = () => {
    setInputsBloqueados(false);
  };

  const handleSalvar = () => {
    fetch('http://localhost:3001/cliente', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(perfilData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Perfil salvo com sucesso:', data);
      })
      .catch(error => console.error('Erro ao salvar perfil:', error));

    setnm_completoExibido(perfilData.nm_completo);
    setInputsBloqueados(true);
  };

  return (
    <main>
      <h1 className="h1Perfil">Meu Perfil</h1>

      <section className="perfil">
        <div className="fotoPerfil">
          {!inputsBloqueados ? (
            <label className="botaoMudarImagem">
              <input
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
                disabled={inputsBloqueados}
                style={{ display: 'none' }}
              />
              <img className="imagemPerfil" src={'/mudar-foto.png'} alt="foto de perfil" />
            </label>
          ) : (
            <img className="imagemPerfil" src={perfilData.imagemPerfil} alt="foto de perfil" />
          )}
          <h3 className="nm_completoPerfil">{nm_completoExibido}</h3>
          <div className='btns'>
            {inputsBloqueados ? (
              <button className='btnPerfil' onClick={handleDesbloquearInputs}>Editar</button>
            ) : (
              <>
                <button className='btnPerfil' onClick={handleSalvar}>Salvar</button>
                <button className='btnPerfil' onClick={handleBloquearInputs}>Cancelar</button>
              </>
            )}
          </div>
        </div>

        <section className="infosPerfil">
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Nome Completo</h3>
            <input
              className="textoPerfil"
              type="text"
              value={perfilData.nm_completo}
              onChange={(e) => handleInputChange(e, 'nm_completo')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Telefone</h3>
            <input
              className="textoPerfil"
              type="tel"
              value={perfilData.telefone}
              onChange={(e) => handleInputChange(e, 'telefone')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Email</h3>
            <input
              className="textoPerfil"
              type="email"
              value={perfilData.email}
              onChange={(e) => handleInputChange(e, 'email')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Gênero</h3>
            <div className='generos'>
              <label className='checkBoxGen'>
                Masculino
                <input
                  type="checkbox"
                  value="Masculino"
                  checked={perfilData.genero === 'Masculino'}
                  onChange={handleGeneroChange}
                  disabled={inputsBloqueados}
                />
              </label>
              <label className='checkBoxGen'>
                Feminino
                <input
                  type="checkbox"
                  value="Feminino"
                  checked={perfilData.genero === 'Feminino'}
                  onChange={handleGeneroChange}
                  disabled={inputsBloqueados}
                />
              </label>
              <label className='checkBoxGen'>
                Outro
                <input
                  type="checkbox"
                  value="Outro"
                  checked={perfilData.genero === 'Outro'}
                  onChange={handleGeneroChange}
                  disabled={inputsBloqueados}
                />
              </label>
            </div>
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Data de Nascimento</h3>
            <input
              className="textoPerfil"
              type="date"
              value={perfilData.dataNascimento}
              onChange={(e) => handleInputChange(e, 'dataNascimento')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">CPF</h3>
            <input
              className="textoPerfil"
              type="text"
              value={perfilData.cpf}
              onChange={(e) => handleInputChange(e, 'cpf')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfil">
            <h3 className="secaoPerfil">Endereço</h3>
            <input
              className="textoPerfil"
              type="text"
              value={perfilData.endereco}
              onChange={(e) => handleInputChange(e, 'endereco')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
        </section>
      </section>
    </main>
  );
}