import PortoLogo from '../assets/portologo.png'
import FiapBranco from '../assets/fiapbranco.png'

export default function Rodape() {

    return (
        <footer>
            <p id="textoFooter">© 2023 Porto Seguro. Todos os direitos reservados. Av. Paulista, 1234 - São Paulo, SP. Telefone: (00) 1234-5678. Email: contato@portoseguro.com.br. Aviso Legal | Política de Privacidade | Termos de Uso</p>
            <div id="linha"></div>
            <div className='portoFiap'>
                <img id='logoPortoF' src={PortoLogo} alt="" />
                <img id='fiapBranco' src={FiapBranco} alt="" />
            </div>

        </footer>
    )
}