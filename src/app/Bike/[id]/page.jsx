"use client"

import { useEffect, useState } from "react"
import './Bike.scss';

export default function BikeForm({ params }) {
  const bikeId = params.id == 0 ? '' : params.id;

  const [bikeData, setBikeData] = useState({
    nome: '',
    numeroSerie: '',
    acessorios: '',
    modelo: '',
    marca: '',
    imagem: 'sem_imagem.png'
  });

  let metodo = 'post'
  if(bikeId) metodo = 'put'

  const [inputsBloqueados, setInputsBloqueados] = useState(true);

  const handleInputChange = (event, campo) => {
    if (!inputsBloqueados) {
      setBikeData({ ...bikeData, [campo]: event.target.value });
    }
  };

  const handleImagemChange = (event) => {
    if (!inputsBloqueados) {
      const novaImagem = URL.createObjectURL(event.target.files[0]);
      setBikeData({ ...bikeData, imagem: novaImagem });
    }
  };

  const handleBloquearInputs = () => {
    setInputsBloqueados(true);
  };

  const handleDesbloquearInputs = () => {
    setInputsBloqueados(false);
  };

  const handleSalvar = () => {
    if (bikeId) {
      // Se existe um ID, então é uma bicicleta existente e precisamos fazer um pedido PUT
      fetch(`http://localhost:3001/bicicletas/${bikeId}`, {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bikeData)
      })
        .then(() => {
          setInputsBloqueados(true);
        })
        .catch(error => console.error(error));
    } else {
      // Se não existe um ID, então é uma nova bicicleta e precisamos fazer um pedido POST
      fetch('http://localhost:3001/bicicletas', {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bikeData)
      })
        .then(() => {
          setInputsBloqueados(true);
        })
        .catch(error => console.error(error));
    }
  };

  useEffect(() => {
    if (bikeId) {
      fetch(`http://localhost:3001/bicicletas/${bikeId}`)
        .then(resp => resp.json())
        .then(resp => setBikeData(resp))
        .catch(error => console.error(error))
    }
  }, [bikeId]);

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
              <img className="imagemPerfilBike" src={bikeData.imagem} alt="foto da bicicleta" />
            </label>
          ) : (
            <img className="imagemPerfilBike" src={bikeData.imagem} alt="foto da bicicleta" />
          )}
          <h3 className="nomePerfilBike">{bikeData.nome || 'Bike'}</h3>
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
              value={bikeData.nome}
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
              value={bikeData.numeroSerie}
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
              value={bikeData.acessorios}
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
              value={bikeData.modelo}
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
              value={bikeData.marca}
              onChange={(e) => handleInputChange(e, 'marca')}
              placeholder="-"
              disabled={inputsBloqueados}
            />
          </article>
        </section>
      </section>
    </main>
  );
}
