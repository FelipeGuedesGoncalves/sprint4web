import Link from "next/link";
import styles from '../app/globals.css';

export default function Menu() {
  return (
    <nav className={styles.navmenu}>
        <Link className="homeLogoLink" href='/'>
            <div className="homeLogo"></div>
        </Link>
        <Link className="iconHome" href='/'>Página Inicial</Link>
        <Link className="iconVistoria" href='/Vistoria'>Vistoria</Link>
        <Link className="iconPlanos" href='/Planos'>Planos</Link>
        <Link className="iconBike" href='/MinhasBicicletas'>Minhas Bicicletas</Link>
        <Link className="iconPerfil" href='/Perfil'>Meu Perfil</Link>
    </nav>
  );
}