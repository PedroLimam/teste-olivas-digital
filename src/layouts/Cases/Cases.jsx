import CardCases from '../../components/CardCases/CardCases';
import './_cases.scss';
import iconNext from '../../assets/svg/icon.svg';
import iconPrevious from '../../assets/svg/icon.svg';

import cases from '../../json/casesbd.json'
import ButtonMore from '../../components/ButtonSeeMore/ButtonMore';
import { useRef } from 'react';

function Cases(){
    const sliderRef = useRef(null)

    function onPreviousClick(e) {
        e.preventDefault()
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
    
    function onNextClick(e) {
        e.preventDefault()
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }

    return(
        <div className='container-cases'>
            <h3 className='container-cases__titulo'>Cases</h3>

            <div ref={sliderRef} className="slider">
                {cases.cases.map(el => <CardCases key={el.id}  titulo={el.titulo} explicacao={el.explicacao} />)}
            </div>

            <ButtonMore/>
            
            <button onClick={e => onPreviousClick(e)} className='icon-previous'><img src={iconPrevious} alt="icone seta para a esquerda" /></button>
            <button onClick={e => onNextClick(e)} className='icon-next'><img src={iconNext} alt="icone seta para a direita" /></button>
        </div>
    )
}

export default Cases;