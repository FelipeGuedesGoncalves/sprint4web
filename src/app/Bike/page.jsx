'use client'

import { useState } from 'react';
import './Bike.css';
import semImagem from '/src/assets/imagem_ausente2.png';
import mudarFoto from '/src/assets/mudar-foto.png';

export default function Perfil() {
  const [perfilData, setPerfilData] = useState({
    nome: '',
    numeroSerie: '',
    acessorios: '',
    modelo: '',
    marca: '',
  });

  const [inputsBloqueados, setInputsBloqueados] = useState(true); // Inicialmente, os inputs estão bloqueados
  const [nomeExibido, setNomeExibido] = useState('Bike 1'); // Nome fictício para bicicleta
  const [imagemPerfil, setImagemPerfil] = useState(semImagem); // Estado para a imagem da bicicleta

  const handleInputChange = (event, campo) => {
    if (!inputsBloqueados) {
      setPerfilData({ ...perfilData, [campo]: event.target.value });
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
      <h1 className="h1Perfil">Perfil da Bicicleta</h1>

      <section className="perfilBike">
        <div className="fotoPerfilBike">
          {!inputsBloqueados ? (
            <label className="botaoMudarImagemBike">
              <input
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
                disabled={inputsBloqueados}
                style={{ display: 'none' }}
              />
              <img className="imagemPerfilBike" src={mudarFoto} alt="foto da bicicleta" />
            </label>
          ) : (
            <img className="imagemPerfilBike" src={imagemPerfil} alt="foto da bicicleta" />
          )}
          <h3 className="nomePerfilBike">{nomeExibido}</h3>
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
        <section className="infosPerfilBike">
          <article className="infoPerfilBike">
            <h3 className="secaoPerfilBike">Nome</h3>
            <input
              className="textoPerfilBike"
              type="text"
              value={perfilData.nome}
              onChange={(e) => handleInputChange(e, 'nome')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfilBike">
            <h3 className="secaoPerfilBike">Número de Série</h3>
            <input
              className="textoPerfilBike"
              type="text"
              value={perfilData.numeroSerie}
              onChange={(e) => handleInputChange(e, 'numeroSerie')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfilBike">
            <h3 className="secaoPerfilBike">Acessórios</h3>
            <input
              className="textoPerfilBike"
              type="text"
              value={perfilData.acessorios}
              onChange={(e) => handleInputChange(e, 'acessorios')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfilBike">
            <h3 className="secaoPerfilBike">Modelo</h3>
            <input
              className="textoPerfilBike"
              type="text"
              value={perfilData.modelo}
              onChange={(e) => handleInputChange(e, 'modelo')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
          <article className="infoPerfilBike">
            <h3 className="secaoPerfilBike">Marca</h3>
            <input
              className="textoPerfilBike"
              type="text"
              value={perfilData.marca}
              onChange={(e) => handleInputChange(e, 'marca')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
        </section>
      </section>
      
      {/* Botões */}
    </main>
  );
}
