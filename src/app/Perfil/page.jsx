'use client'

import React, { useState } from 'react';
import './Perfil.css';

export default function Perfil() {
  const [perfilData, setPerfilData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    endereco: '',
  });

  const [inputsBloqueados, setInputsBloqueados] = useState(true); // Inicialmente, os inputs estão bloqueados
  const [nomeExibido, setNomeExibido] = useState('Cliente Porto'); // Estado para controlar o nome exibido
  const [imagemPerfil, setImagemPerfil] = useState('imagem_ausente2.png'); // Estado para a imagem de perfil

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
    setImagemPerfil(novaImagem);
  };

  const handleBloquearInputs = () => {
    setInputsBloqueados(true);
  };

  const handleDesbloquearInputs = () => {
    setInputsBloqueados(false);
  };

  const handleSalvar = () => {
    setNomeExibido(perfilData.nome); // Atualiza o nome exibido com o valor do input 'nome'
    setInputsBloqueados(true);
    // Adicione aqui qualquer lógica necessária para salvar os dados, incluindo a imagem.
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
              <img className="imagemPerfil" src={'mudar-foto.png'} alt="foto de perfil" />
            </label>
          ) : (
            <img className="imagemPerfil" src={imagemPerfil} alt="foto de perfil" />
          )}
          <h3 className="nomePerfil">{nomeExibido}</h3>
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
                        <h3 className="secaoPerfil">Nome</h3>
                        <input
                            className="textoPerfil"
                            type="text"
                            value={perfilData.nome}
                            onChange={(e) => handleInputChange(e, 'nome')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                        />
                    </article>
                    <article className="infoPerfil">
                        <h3 className="secaoPerfil">Sobrenome</h3>
                        <input
                            className="textoPerfil"
                            type="text"
                            value={perfilData.sobrenome}
                            onChange={(e) => handleInputChange(e, 'sobrenome')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                        />
                    </article>
                    <article className="infoPerfil">
                        <h3 className="secaoPerfil">Telefone</h3>
                        <input
                            className="textoPerfil"
                            type="text"
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
                            type="text"
                            value={perfilData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                        />
                    </article>
                    {/* Seção de Gênero */}
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
                    {/* Fim da Seção de Gênero */}
                    <article className="infoPerfil">
                        <h3 className="secaoPerfil">Data de Nascimento</h3>
                        <input
                            className="textoPerfil"
                            type="text"
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


