import './_footer.scss'
import iluOnda from "../../assets/img/ilustracao-onda.png"
import circuloMetade from "../../assets/img/circulo-metade.svg"
function Footer(){
    return(
        <footer className='container-footer'>

            <img className='footer__img-onda' src={iluOnda} alt="ilustração cor vermelha estilo de onda"/>

            <h3 className='footer__titulo'>Receba <span>nossas novidades</span></h3>

            <h5>Quer receber conteúdos exclusivos no seu email?</h5>

            <div className="footer-box-inputs">
                <input type="text" name="" id="" placeholder='Digite seu nome' /> <input type="text" name="" id=""  placeholder='Digite seu email'/>
            </div>

            <div className="footer__box-check-direitos">
                <input type="checkbox" name="" id="aceita" /> 
                <label htmlFor="aceita">
                    Ao informar meus dados eu concordo com a política de 
                    privacidade e concordo em
                    receber comunicações.
                </label>
            </div>

            <button>Cadastrar</button>

            <img className='footer__img-circulo' src={circuloMetade} alt="ilustração circulo amarelo pela metade"/>


            <div className="footer__box-rodape">
                <p>Copyright 2022 - Todos os direitos reservados | Política  de privacidade | Condições Gerais</p>
                <p>Desenvolvido por Olivas Digital</p>
            </div>
        </footer>
    )
}

export default Footer;