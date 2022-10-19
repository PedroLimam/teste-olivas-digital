import './_cardPostsMain.scss'

function CardPostsMain({tema, titulo, data}){
    return(
        <div className='box-card-postsMain' >  
            <span>{data}</span>
            <span className='temaCardMain'>{tema}</span>

            <p>{titulo}</p>
        </div>
    )
}

export default CardPostsMain;