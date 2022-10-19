import './_sectionPosts.scss'
import imgBlog from "../../assets/img/img-blog.png"
import CardPosts from '../../components/CardPosts/CardPosts';
import ButtonMore from '../../components/ButtonSeeMore/ButtonMore';
import imgOnda from "../../assets/img/ilustracao-onda.png";
import imgSemiCirculo from "../../assets/img/semicirculo.png"

import bdSectionPosts from "../../json/sectionsbd.json"

function SectionPosts(){
    
    return(
        <div className='container-sectionPosts'>  
            <h2 className='sectionPosts__titulo'>Conteúdos <span>para você</span></h2>

            <div className="sectionsPosts__container-boxItems">
                <div className="sectionsPosts__box-left">
                    <h3>Blog</h3>

                    <img src={imgBlog} alt="ilustração, uma mulher lendo no computador" />

                    <span>TECNOLOGIA</span>
                    <p>11/11/2022</p>

                    <h2>Contando com a tecnologia para o treinamento de especialistas no atendimento</h2>

                    <p className='sectionPosts__descricao'>Muito mais que saber ouvir e atender as necessidades de um cliente,
                     o Customer Experience visa ir além e oferecer uma experiência que de fato trará muito mais proximidade
                     entre o cliente e a marca. <br />
                     As boas práticas de um atendimento já não são o que foram há poucos anos atrás, o mercado demanda por profissionais
                     capazes de proporcionar um contato transformador. Não mais espaço para o atendimento engessado.
                      </p>

                </div>

                <div className="sectionsPosts__box-rigth">

                    <h4>Outras postagens:</h4>
                    
                    {bdSectionPosts.postsSection.map(el => <CardPosts key={el.id} tema={el.tema}  titulo={el.titulo} data={el.data}/> )}

                    

                    <ButtonMore/>

                </div>
            </div>

            <img className='img-onda' src={imgOnda} alt="ilustração onda"/>
            <img className='imgSemiCirculo' src={imgSemiCirculo} alt="ilustração semicirculo"/>

        </div>
    )
}

export default SectionPosts;