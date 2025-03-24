
const ProductCard = ({ prod }) => {
    console.log(prod);
    return (
        <div className="product">
            <img className="product-image" src={prod.images[0]}></img>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            <button className="product-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;