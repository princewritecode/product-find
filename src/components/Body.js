import { useState, useEffect } from "react";
import ProductCard, { inStock } from "./ProductCard";
import { Link } from "react-router";
const Body = () =>
{
    const [product, setProduct] = useState([]);
    const [productFilter, setProductFilter] = useState([]);
    const InStockOrNot = inStock(ProductCard);
    const [inputValue, setInputValue] = useState('');

    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        const data = await fetch('https://dummyjson.com/products');
        const responseData = await data.json();
        setProduct(responseData.products);
        setProductFilter(responseData.products);
        console.log(responseData.products);

    };
    if (product.length === null)
    {
        return <h1>Loading...</h1>;
    }
    return (
        <>

            <div class="flex space-x-4 justify-center my-6">
                <button class="bg-[#F3EEE8] text-black py-2 px-4 rounded-lg hover:bg-[#E0CFCB] transition">Beauty</button>
                <button class="bg-[#F3EEE8] text-black py-2 px-4 rounded-lg hover:bg-[#E0CFCB] transition">Fragrance</button>
                <button class="bg-[#F3EEE8] text-black py-2 px-4 rounded-lg hover:bg-[#E0CFCB] transition">Furniture</button>
                <button class="bg-[#F3EEE8] text-black py-2 px-4 rounded-lg hover:bg-[#E0CFCB] transition">All Items</button>
            </div>

            <div className="flex justify-center items-center min-h-4 my-4">
                <div className="relative w-full max-w-md">
                    {/* Search Input */}
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full pl-4 pr-12 py-2 text-sm border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={inputValue} onChange={(e) =>
                        {
                            setInputValue(e.target.value);
                            console.log(inputValue);
                        }
                        } />
                    {/* Search Button */}
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                        onClick={() =>
                        {
                            const prodFilterList = productFilter.filter((prod) =>
                            {
                                return (prod.title.toLowerCase().includes(inputValue.toLowerCase()));
                            });
                            setProduct(prodFilterList);

                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
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