import './_cardCases.scss'
import ilustracaoImagem from "../../assets/svg/ilustracao-imagem.svg";

function CardCases({titulo, explicacao}){
    return(
        <div className='box-cardCases'>  
            <img src={ilustracaoImagem} alt="imagem" />

            <h4>{titulo}</h4>

            <p>{explicacao}</p>

            <button className='btn-cardCases'>Saiba mais</button>
            
        </div>
    )
}

export default CardCases;