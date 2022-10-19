import './_cardPostsMain.scss'

function CardPostsMain({tema, titulo, data}){
    return(
        <div className='box-card-postsMain' >  
            <span>{data}</span>
            <span className='card-postsMain__tema'>{tema}</span>

            <p className='card-postsMain__titulo'>{titulo}</p>
        </div>
    )
}

export default CardPostsMain;