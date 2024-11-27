const Card = ({data}) => {
    console.log(data);

    const readMore = (url) =>{
        window.open(url)
    }
     
    return (
        <div className='cardContainer'>
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) {
                    return null;
                } else {
                    return (
                        <div className='card' key={index}>
                            <img src={ curItem.urlToImage} alt={curItem.title} />
                            <div className='title'>{curItem.title}</div>
                            <div className='content'>{curItem.description}</div>
                            <button onClick={() => readMore(curItem.url)}>Read More</button>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Card;