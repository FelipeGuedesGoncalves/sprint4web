import Link from 'next/link'
import './Home.css'
import IdosoBike from "/src/assets/IdosoBike.jpg"

export default function Home() {

    return (
        <main className='mainHome'>
            <header>
                <section className='sechome'>
                    <h1 className='h1home'>Quem tem Porto, tem mais tranquilidade para pedalar</h1>
                    <h1 className='h1home azul'>Experimente nossa mais nova ferramenta <span>100%<span className='_'>_</span>DIGITAL</span> de vistoria</h1>
                    <Link id='testar' href="/vistoria">Testar agora mesmo!</Link>
                </section>
            </header>
            <section className="card">
                <img id='idoso' src={IdosoBike} alt="" />
                <article className='arthome'>
                    <h1>A Porto não mede esforços!</h1>
                    <p id='textoCard'>Atendemos todos os tipos de bicicletas e oferecemos uma variedade de planos de seguro para garantir a proteção necessária, proporcionando segurança e tranquilidade aos ciclistas.</p>
                    <a id='confPlano' href="/planos">Confira nossos planos!</a>
                </article>
            </section>
            <section className="card integrantes">
                <article className='arthome integrantes'>
                    <h1>Integrantes do grupo:</h1>
                    <p id='textoCard integrante'>
                        (Nina Rebello francisco - RM: 99509)
                        <br />
                        (Camila dos Santos Cunha - RM: 551785)
                        <br />
                        (Guilherme Rodrigues de Castro - RM: 99624)
                        <br />
                        (Luiz Fellipe Soares de Sousa Lucena - RM: 551365)
                        <br />
                        (Felipe Guedes Gonçalves - RM: 550906)</p>
                </article>
            </section>
        </main>
    )
}