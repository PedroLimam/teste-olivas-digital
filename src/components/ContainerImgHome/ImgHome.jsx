import './_imgHome.scss';
import imgHome from '../../assets/img/img-home.png';
import imgCirculo from '../../assets/img/circulo.png';

function ImgHome(){
    
    return(
        <div className='container-img-home'>  
            <img className='container__img' src={imgHome} alt="imagem de 4 pessoas utilizando smartphone e sorrindo"/>

            <img className='container__img-circulo' src={imgCirculo} alt="ilustração circulo"/>
        </div>
    )
}

export default ImgHome;