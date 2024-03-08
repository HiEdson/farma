"use client"
import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../../public/PROJECTO FARMACIA.svg";

const ExampleNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showinput, setShowInput] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const showSearchSmall =()=> setShowInput(!showinput);




    return (
        <nav className="px-2 navbar navbar-light bg-light navbar-expand-md">
            {/* Hamburger menu on small and extra-small screens */}
            <button className="navbar-toggler" type="button" onClick={toggle}>
                <FaBars />
            </button>
            {/* Logo */}
            <a href="/" className='navbar-brand mr-auto mx-sm-auto'>
                <img
                    alt="logo"
                    src={logo.src}
                    style={{
                        height: 70,
                        width: 70
                    }}
                />
            </a>



            <ul className="ml-auto d-flex flex-row justify-content-center align-items-center">
                <li className={`nav-item d-${showinput?"none":"inline"} d-sm-block d-md-none px-2 text-center`}>
                    <a href="#" className="nav-link icons" onClick={showSearchSmall}><FaSearch color='#0b9441' size={22} /></a>
                </li>
                <li className="nav-item d-inline d-sm-block d-md-none px-2" >
                    <a href="#" className="nav-link"><FaShoppingCart color='#0b9441' size={22} /></a>
                </li>
                <li className="nav-item d-inline d-sm-block d-md-none">
                    <a href="#" className="nav-link"><FaUser color='#0b9441' size={22} /></a>
                </li>
            </ul>

            <ul class={`navbar-nav mx-auto d-${showinput ? "sm-block" : "none"} d-sm-block d-md-none`}>
                <li class="nav-item flex-grow-1">
                    <div class="input-group">
                        <input class="form-control border-black" type="text" placeholder="Coartem, malária..." />
                        <button class="btn border-black" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9441" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85z" />
                                <path fill-rule="evenodd" d="M10.5 6A4.5 4.5 0 0 0 6 10.5v.5a1 1 0 0 0 2 0v-.5A2.5 2.5 0 0 1 10.5 8h.5a1 1 0 0 0 0-2h-.5z" />
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
            {console.log(showinput)}


            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                {/* Search input on large and extra-large screens */}
                {/* <ul className="navbar-nav mx-auto d-none d-lg-flex">
                    <li className="nav-item w-100">
                        <input className="form-control " type="text" placeholder="Coartem, malária..." />
                    </li>
                    <li className="nav-item d-none d-lg-block bg-black">
                        <a href="#" className="nav-link icons"><FaSearch color='#0b9441' size={22}/></a>
                    </li>
                </ul> */}

                <ul class="navbar-nav mx-auto d-none d-sm-block d-lg-flex">
                    <li class="nav-item flex-grow-1">
                        <div class="input-group">
                            <input class="form-control border-black" type="text" placeholder="Coartem, malária..." />
                            <button class="btn border-black" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9441" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85z" />
                                    <path fill-rule="evenodd" d="M10.5 6A4.5 4.5 0 0 0 6 10.5v.5a1 1 0 0 0 2 0v-.5A2.5 2.5 0 0 1 10.5 8h.5a1 1 0 0 0 0-2h-.5z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>



                {/* Icons on the right side */}
                {/* <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item">
                        <a href="#" className=""><FaShoppingCart color='#0b9441' size={22} /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className=""><FaUser color='#0b9441' size={22} /></a>
                    </li>
                </ul> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-none d-lg-block">
                        <a href="#" className="nav-link"><FaShoppingCart color='#0b9441' size={22} /></a>
                    </li>
                    <li className="nav-item d-none d-lg-block">
                        <a href="#" className="nav-link"><FaUser color='#0b9441' size={22} /></a>
                    </li>
                </ul>

                {/* Categories for small and extra-small screens */}
                <ul class="navbar-nav d-lg-none">
                    <li class="nav-item">
                        <a href="#" class="nav-link icons fw-bold">Sexalidade e fertilidade</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link icons fw-bold"> Mamã e bebê</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link icons fw-bold"> Vida Saudável</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link icons fw-bold"> Cuidados e Cosméticos</a>
                    </li>
                    
                </ul>
            </div>

        </nav>
    );
};

export default ExampleNavbar;
