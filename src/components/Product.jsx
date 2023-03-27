import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";


const Product = ({ id, title, image, price, description }) => {
	return (
			<div className="justify-center items-center small-height cursor-pointer">
				<ScrollToTop
					smooth
					top={20}
					className="btn btn-circle shadow-none btn-info"
					color="#fafafa"
					width="40px"
				/>
				<div className="small-card w-[300px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
					<Link to={`/detail/${id}`}>
					<img
						className="w-[200px] object-contain rounded-t-md h-[80px] small-img"
						src={image}
						alt=""
					/>
					</Link>
					<div className="mt-4">
						<h1 className="text-xl font-bold text-gray-700 truncate small-head">
							{title}
						</h1>
						<p className="text-sm mt-2 text-gray-700 text-start leading-5 leading-tight truncate small-des">
							{description}
						</p>
						<div className="mt-5 mb-2 flex justify-between pl-4 pr-2 small-btngroup">
							<button className="small-btn mr-2  block text-xl font-semibold text-gray-700 cursor-auto">
								${price}
							</button>
							<button className="small-btn text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300 capitalize">
								add to cart
							</button>
						</div>
					</div>
				</div>
			
		</div>
	);
};

export default Product;
