function FooterCard ({image, title, text}) {
    return(
        <>
        <div>
            <img src={image} style={{ width: '120px' }}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        
        </>
    );
}

export default FooterCard;