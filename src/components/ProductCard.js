
const ProductCard = ({ prod }) =>
{
    return (
        <div className="border-2 w-96 border-[#F3EEE8] rounded-2xl flex-col p-8 items-center justify-center gap-2 transform hover:scale-105 transis">
            <img className="w-56 h-56" src={prod.images[0]}></img>
            <h1 className="font-bold font-stretch-105% my-4">{prod.title}</h1>
            <p>{prod.description}</p>
            <p className="my-4 p-3 bg-amber-50 w-22 rounded-3xl"> $ {prod.price}</p>
            <button className="my-2 p-3 bg-[#F3EEE8] w-77 rounded-[.5rem]">Add to Cart</button>
        </div>
    );
};
export const inStock = (ProductCard) =>
{
    return (props) =>
    {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-sm">Low Stock</label>
                <ProductCard {...props}></ProductCard>
            </div>
        );
    };
};

export default ProductCard;