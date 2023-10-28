import styles from "./Vistoria.module.css"

export default function Vistoria() {
  return (
    <main className={styles.mainvistoria}>
      <h1 className={styles.h1vistoria}>Vistoria</h1>
      <section className={styles.requisitos}>
        <article className={styles.requisito}>
          <h2 className={styles.tema}>Boa iluminação</h2>
          <p className={styles.recado}>Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
        </article>
        <article className={styles.requisito}>
          <h2 className={styles.tema}>Foco nítido</h2>
          <p className={styles.recado}>Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
        </article>
        <article className={styles.requisito}>
          <h2 className={styles.tema}>Ângulo adequado</h2>
          <p className={styles.recado}>Escolha um ângulo que mostre detalhes da bicicleta, sem obstruções e evitando ângulos inclinados ou distorcidos.</p>
        </article>
        <article className={styles.requisito}>
          <h2 className={styles.tema}>Enquadramento ideal</h2>
          <p className={styles.recado}>Capture a imagem da bicicleta em um ambiente bem iluminado, evitando sombras pesadas que possam obscurecer os detalhes.</p>
        </article>
      </section>
      <article className={styles.foto}>
        <h2 className={styles.titulofoto}>TIRAR FOTO</h2>
        <p className={styles.tutorialFoto}>Quando estiver pronto, clique aqui para iniciar a seção de fotos para o cadastro e vistoria de uma nova bicicleta. Siga as instruções que serão dadas conforme você tira as fotos</p>
        <img className={styles.camera} src='/camera.png' alt="camera" />
        <p className={styles.tutorialFoto}>(Por motivos de segurança, não é possível fazer upload do dispositivo)</p>
      </article>
    </main>
  );
}
