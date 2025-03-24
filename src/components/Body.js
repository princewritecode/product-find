import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
const Body = () =>
{


    const [product, setProduct] = useState([]);
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        const data = await fetch('https://dummyjson.com/products');
        const responseData = await data.json();
        console.log(responseData);
        setProduct(responseData.products);
    };

    if (product.length === null)
    {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="my-10 flex flex-wrap justify-center items-center gap-6">
            {
                product.map((products) =>
                {

                    return (<>

                        <Link to={`/products/${products.id}`}><ProductCard prod={products}></ProductCard></Link>

                    </>);

                })
            }
        </div>
    );
};
export default Body;