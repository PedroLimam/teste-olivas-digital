import './_cardPosts.scss'

function CardPosts({tema, titulo, data}){
    return(
        <div className='box-card-posts' >  
            <span className='card-posts__tema'>{tema}</span>

            <p className='card-posts__titulo'>{titulo}</p>

            <span>{data}</span>
        </div>
    )
}

export default CardPosts;