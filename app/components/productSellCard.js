"use client"
import React, { useState, useEffect} from 'react';
import { FaTags, FaStar } from 'react-icons/fa';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const ProductCard = ({ product }) => {
const [hasLoaded, setHasLoaded] = useState(false)

useEffect(()=>{
setHasLoaded(true)
},[])


    return (
        <div className="card h-100 d-flex flex-column justify-content-between">
            <div>
                <div className="position-relative">
                    {!product.desconto && <span className="bg-danger text-white position-absolute top-0 end-0 p-1">-{hasLoaded ? Math.floor(Math.random() * 30) + 1 : null}%</span>}
                    <img src={product.imagem} className="card-img-top" alt={product.nome} style={{height:"200px", objectFit:"cover"}} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.nome}</h5>
                    <p className="card-text">{product.descricao}</p>
                    <div>
                        <span className="me-2"><FaStar color='#eab308' /> <FaStar color='#eab308' /><FaStar color='#eab308' /><FaStar color='#eab308' />  {hasLoaded ? Math.floor(Math.random() * 5) + 1 : null}/5</span>
                        <FaTags size={18} color="#0b9441" />
                    </div>
                    <div className="">
                        
                        <p className="card-text fw-semibold">Preço: {product.preco.toFixed(2)} KZ</p>
                    </div>
                </div>
            </div>
            <div className="text-center mb-3 px-2">
                <button className="btn btn-primary w-100" style={{ background: "#0b9441" }}>Comprar <MdOutlineShoppingCartCheckout size={23}/></button>
            </div>
        </div>
    );
};

export default ProductCard;

