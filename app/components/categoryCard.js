import React from 'react';
import style from '../category.module.css';

const MyCard = ({data}) => {


    console.log("eeeee", data)
    return (
        <div className={`card ${style["my-card"]} mb-4 d-flex flex-column h-100`}>
            <img src={data?.imagem} className="card-img-top image-cover w-full" style={{height:"200px"}} alt="Card background" />
            <div className="card-img-overlay">
                <div className={style["card-cover"]}></div>
            </div>
            <div className="card-body d-flex flex-column flex-grow-1">
                <p className="fw-bold flex-grow-1">{data.nome}</p>
            </div>
        </div>
    );
};

export default MyCard;
