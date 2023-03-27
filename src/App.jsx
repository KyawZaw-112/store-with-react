import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HashLoader from "react-spinners/HashLoader";
import "./../src/index.css"
import Detail from "./components/Detail";
// import Search from "./components/Search";
function App() {
	const [loading, setLoading] = useState(false);
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const api = await fetch(`https://fakestoreapi.com/products`);
		const data = await api.json();

		setItem(data);
		const pd = data.filter( x => x.title.includes());
	}
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return (
		<div className="flex justify-center items-center align-middle relative">
			{
			loading ? 
				<div className=" m-auto items-center justify-center flex flex-col gap-20 align-middle h-screen">
					<HashLoader  color="#56c728"   size={300}/>
					<p className="text-center text-7xl font-extrabold ">Shop</p>
				</div>
				:
				<div>
					<Navbar setItem={setItem} product={item} />
					<Routes>
						<Route path="/" element={<Products products={item} />} />
						<Route path="/detail/:id" element={<Detail/>} />
					</Routes>
				</div>
			}
				

                
		</div>
	);
}

export default App;
