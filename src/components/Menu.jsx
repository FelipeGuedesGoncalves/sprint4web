
import Link from "next/link"
import PortoBikeLogo from "../assets/portobikelogo.png"

export default function Menu(){

    return(
        <nav id="navmenu">
            <Link className="homeLogo" href='/' ><img className="homeLogoHide" id="portoBikeLogo" src={PortoBikeLogo} alt="" /></Link>
            <Link className="iconHome" href='/' >Página Inicial</Link>
            <Link className="iconVistoria" href='/Vistoria' >Vistoria</Link>
            <Link className="iconPlanos" href='/Planos' >Planos</Link>
            <Link className="iconBike" href='/MinhasBicicletas' >Minhas Bicicletas</Link>
            <Link className="iconPerfil" href='/Perfil' >Meu Perfil</Link>
        </nav>
    )
}