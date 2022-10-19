import './_cardPosts.scss'

function CardPosts({tema, titulo, data}){
    return(
        <div className='box-card-posts' >  
            <span className='temaCard'>{tema}</span>

            <p>{titulo}</p>

            <span>{data}</span>
        </div>
    )
}

export default CardPosts;