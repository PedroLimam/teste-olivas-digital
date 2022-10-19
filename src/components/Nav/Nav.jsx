import Button from "../Button/Button";
import logoOlivas from "../../assets/img/logo-olivas.png"
import './_nav.scss'

function Nav(){

    return(
        <nav className="nav">  
            <img className="nav__img-logo" src={logoOlivas} alt="imagem logo olivas digital" />

            <ul className="nav__menu">
                <li className="nav__menu-item">Quem somos</li>
                <li className="nav__menu-item">Metodologia</li>
                <li className="nav__menu-item">Nossas soluções</li>
                <li className="nav__menu-item">Conteúdos pra você</li>
                <li className="nav__menu-item">Canais de comunicação</li>
            </ul>
            
            <Button/>

            <input type="checkbox" id="bx-input" style={{display: "none"}}/>
            <label className="bx-label" htmlFor="bx-input">
                <div className="bx mr-4"></div>
            </label>

            <div className="menu-hamburguer">
                <ul className="nav__hamburguer">
                    <li>Quem somos</li>
                    <li>Metodologia</li>
                    <li>Nossas soluções</li>
                    <li>Conteúdos pra você</li>
                    <li>Canais de comunicação</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;