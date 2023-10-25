import camera from "/src/assets/camera.png"
import './Vistoria.css'

export default function Vistoria(){

    return(
        <main className="mainvistoria">
            <h1 className="h1vistoria">Vistoria</h1>
            <section className="requisitos">
                <article className="requisito">
                    <h2 className="tema">Boa iluminação</h2>
                    <p className="recado">Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
                </article>
                <article className="requisito">
                    <h2 className="tema">Foco nítido</h2>
                    <p className="recado">Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
                </article>
                <article className="requisito">
                    <h2 className="tema">Ângulo adequado</h2>
                    <p className="recado">Escolha um ângulo que mostre detalhes da bicicleta, sem obstruções e evitando ângulos inclinados ou distorcidos.</p>
                </article>
                <article className="requisito">
                    <h2 className="tema">Enquadramento ideal</h2>
                    <p className="recado">Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
                </article>
            </section>
            <article className="foto">
                <h2 className="titulofoto">TIRAR FOTO</h2>
                <p className="tutorialFoto">Quando estiver pronto, clique aqui para iniciar a seção de fotos para o cadastro e vistoria de uma nova bicicleta. Siga as instruções que serão dadas conforme você tira as fotos</p>
                <img className="camera" src={camera} alt="camera" />
                <p className="tutorialFoto">(Por motivos de segurança, não é possível fazer upload do dispositivo)</p>
            </article>
        </main>
    )
}