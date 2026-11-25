import {useEffect, useState} from "react";

export default function FetchedData() {

    const [products, setProducts] = useState([]);

    async function fetchData() {
        const response = await fetch("https://dummyjson.com/products")
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setProducts(data.products);
        } else {
            console.log(response)
        }
    }

    //research on await async and promises
    //hook == function
    useEffect(() => {
        fetchData()
    }, [])

    const productList = products.map(item =>
        <div>
            <img src={item.thumbnail} alt=""/>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
        </div>)
    return (
        <div className="container">
            {productList}
        </div>

    )
}