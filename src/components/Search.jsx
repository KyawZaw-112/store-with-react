import React from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'

const Search = () => {
	const { name } = useParams();
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const api = await fetch(`https://fakestoreapi.com/products`);
		const data = await api.json();
		setItem(data);
		// const pd = data.filter((x) => x.title.includes(name));
	};
	const pd = item.filter(x=>x.title.includes(name))
	console.log(pd);
	return (
        <div>

        </div>
    );
};

export default Search;
