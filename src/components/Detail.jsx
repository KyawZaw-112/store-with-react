import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const api = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await api.json();
		setItem(data);
	};
	return (
		<div className="w-[99vw] block respond-small">
			<div className="card lg:card-side bg-base-100 shadow-xl max-w-[70%] mx-auto gap-4">
				<figure className="object-container">
					<img
						src={item.image}
						alt="Album"
                        className="h-[100%] p-4 detail-img"

					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
                        {item.title}
                    </h2>
					<p>
                        {item.description}
                    </p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">
                            Add To Cart
                        </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
