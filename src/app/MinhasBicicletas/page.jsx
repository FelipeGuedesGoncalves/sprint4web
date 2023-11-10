'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react';
import './MinhasBicicletas.scss';

export default function MinhasBicicletas() {
  const [bicicletas, setBicicletas] = useState([]);

  useEffect(() => {
    // Simula a busca de bicicletas do servidor
    fetch(`http://localhost:3001/bicicletas`)
      .then(resp => resp.json())
      .then(resp => setBicicletas(resp))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Simula a exclusão de uma bicicleta no servidor
    fetch(`http://localhost:3001/bicicletas/${id}`, {
      method: 'delete'
    })
      .then(window.location = '/')
      .catch(error => console.error(error));
  };

  return (
    <main>
      <h1 className='h1bikes'>Minhas Bicicletas</h1>

      {bicicletas.map(bicicleta => (
        <section className='bike' key={bicicleta.id}>
          <div className='fotoPerfilBike'>
            <img className='imagemBike' src={bicicleta.imagem || "sem_imagem.png"} alt="foto da bike" />
            <h3 className='nomeBike'>{bicicleta.nome}</h3>
          </div>
          <section className='infos'>
            <article className='info'>
              <h3 className='secao secNumSerie'>Numero de Série</h3>
              <p className='textoBike txtNumserie'>{bicicleta.numeroSerie || '-'}</p>
            </article>
            <article className='info'>
              <h3 className='secao secAcessorios'>Acessórios</h3>
              <p className='textoBike txtAcessorios'>{bicicleta.acessorios || '-'}</p>
            </article>
            <article className='info'>
              <h3 className='secao secModelo'>Modelo</h3>
              <p className='textoBike txtModelo'>{bicicleta.modelo || '-'}</p>
            </article>
            <Link className='mais' href={`/Bike/${bicicleta.id}`}>Ver Mais</Link>
          </section>
          <button className='addBike' onClick={() => handleDelete(bicicleta.id)}>Excluir</button>
        </section>
      ))}

      <button className='addBike'><Link href={'/Bike/0'}>+</Link></button>
    </main>
  );
}
