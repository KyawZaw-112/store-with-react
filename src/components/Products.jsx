import React from "react";
import { useState,useEffect } from "react";
import Product from "./Product";
import Footer from "./Footer";

const Products = ({products}) => {
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const api = await fetch(`https://fakestoreapi.com/products`);
		const data = await api.json();

		setItem(data);
		const pd = data.filter( x => x.title.includes())
		console.log(pd);
	}
	return (
		<div className="flex flex-wrap gap-10 justify-center mt-10 respond-small">
			{products.map((i) => {
				return (
                    <Product key={i.id} {...i} />
                )
			})}
			<Footer />
		</div>
	);
};

export default Products;
