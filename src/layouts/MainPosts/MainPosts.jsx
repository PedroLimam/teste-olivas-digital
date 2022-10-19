import './_mainPosts.scss'
import imagemMulher from "../../assets/img/ilustracao-mulher.png"
import imgTriangulo from "../../assets/svg/triangulo.svg"
import ButtonMore from '../../components/ButtonSeeMore/ButtonMore';
import CardPostsMain from '../../components/CardPostsMain/CardPostsMain';
import bdSectionPosts from "../../json/sectionsbd.json"
import { useEffect, useState } from 'react';
import { BsFillRecordFill } from "react-icons/bs";

function MainPosts(){
    const [arrayFilter, setArrayFilter] = useState([])

    useEffect(() => {
       const teste = bdSectionPosts.postsSection.filter(el => el.id < 4)
       setArrayFilter(teste)
    }, [])

    return(
        <div className='container-mainPosts'>  

            <div className="box-layouts">
                <div className="mainPosts__box-left">
                    <h2 className='mainPosts__titulo'>Principais notícias</h2>

                    {arrayFilter.map(el => <CardPostsMain key={el.id} tema={el.tema}  titulo={el.titulo} data={el.data}/> )}

                    <ButtonMore/>
                </div>

                <div className="mainPosts__box-rigth">
                    <div className="mainPosts-box-img">
                        <img src={imagemMulher} alt="imagem mulher comendo biscoito e vendo algo no computador"/>
                    </div>
                    <div className='mainPosts__box-iconsCircle'> <BsFillRecordFill/> <BsFillRecordFill/> <BsFillRecordFill/> <BsFillRecordFill/> <BsFillRecordFill/> <BsFillRecordFill/></div>
                    <div className='mainPosts__box-typeEdate'><span>TECNOLOGIA</span> <p>11/11/2022</p></div>

                    <h3 className='mainPosts__titulo'>Contando com a tecnologia para o treinamento de especialistas no atendimento</h3>

                    <p className='mainPosts__descricao'>
                        Muito mais do que saber ouvir e atender as necessidades de um cliente, o Customer Experience
                        visa ir além e oferecer uma experiência que de fato trará muito mais proximidade entre
                        o cliente a marca
                    </p>

                </div>
            </div>

            <img className='imgTriangulo' src={imgTriangulo} alt="ilustração triangulo" />
        </div>
    )
}

export default MainPosts;