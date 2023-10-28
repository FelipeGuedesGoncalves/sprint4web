import styles from '../app/globals.css';

export default function Rodape() {
  return (
    <footer>
      <p className={styles.textoFooter}>© 2023 Porto Seguro. Todos os direitos reservados. Av. Paulista, 1234 - São Paulo, SP. Telefone: (00) 1234-5678. Email: contato@portoseguro.com.br. Aviso Legal | Política de Privacidade | Termos de Uso</p>
      <div className={styles.linha}></div>
      <div className={styles.portoFiap}>
        <img className={styles.logoPortoF} src='/portologo.png' alt="" />
        <img className={styles.fiapBranco} src='/fiapbranco.png' alt="" />
      </div>
    </footer>
  );
}
