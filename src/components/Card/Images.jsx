import cardLogo from '/shape.jpg'

const Images =()=>{
    return(
        <>
            {/* <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure> */}
            {/* <figure><img src="./shape.jpg" alt="Shoes" /></figure> */}
            <figure><img src={cardLogo} alt="Shoes" /></figure>
        </>
    )
};
export default Images;
