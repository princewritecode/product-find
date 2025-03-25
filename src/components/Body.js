import { useState, useEffect } from "react";
import ProductCard, { inStock } from "./ProductCard";
import SearchBox from "./SearchBox";
import { Link } from "react-router";
const Body = () =>
{
    const [product, setProduct] = useState([]);
    const InStockOrNot = inStock(ProductCard);
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        const data = await fetch('https://dummyjson.com/products');
        const responseData = await data.json();
        setProduct(responseData.products);
    };
    if (product.length === null)
    {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <SearchBox></SearchBox>
            <div className="my-10 flex flex-wrap justify-center items-center gap-6 ">
                {
                    product.map((products) =>
                    {
                        return (<>

                            <Link key={products.id} to={`/products/${products.id}`}>
                                {/* if the product is out of stock show it using higher order component which takes component as input and return enhanced  version of the input */}
                                {
                                    (products.availabilityStatus === "Low Stock") ? <InStockOrNot prod={products}></InStockOrNot> : <ProductCard prod={products}></ProductCard>
                                }
                            </Link>
                        </>);
                    })
                }
            </div>
        </>
    );
};
export default Body;