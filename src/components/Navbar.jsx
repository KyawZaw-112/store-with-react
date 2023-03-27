import React from "react";
import { RiSearchLine } from "react-icons/ri";
import {useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = ({setItem,product}) => {
	const nav = useNavigate();
	const [search, setSearch] = useState('');
	const submitHandler = e => {
		e.preventDefault();
		const filterPd = product.filter(p=>p.title.toLowerCase().includes(search));
		setItem(filterPd);
	}

	return (
		<div>
			<div className="navbar bg-base-100 shadow-lg fixed z-10">
				<div className="flex-1">
					<Link to={'/'}  className="normal-case text-2xl font-bold ml-12 nav-head p-3 rounded-lg">
						Shop
					</Link>
				</div>
				<div className="flex gap-4 sm-bar">
					<div className="form-control">
						<form className="flex items-center" onSubmit={submitHandler}>
							<input
								type="text" 
								placeholder="Search"
								className="input input-bordered rounded-r-none sm-input"
								value={search}
								onChange={e=> setSearch(e.target.value)}
							/>
							<button className=" border-t-2 border-b-2 border-r-2 p-2 rounded-tr-lg rounded-br-lg sm-btn">
								<RiSearchLine className="text-3xl" />
							</button>
						</form>
					</div>
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle"
						>
							<div className="indicator">
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
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">
									0
								</span>
							</div>
						</label>
						<div
							tabIndex={0}
							className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
						>
							<div className="card-body">
								<span className="font-bold text-lg">
									0 Items
								</span>
								<span className="text-info">
									Subtotal: $999
								</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">
										View cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img src="/src/assets/Profile.png" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
