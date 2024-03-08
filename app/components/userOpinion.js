import React from 'react';
import { FaStar } from 'react-icons/fa';

const UserOpinions = () => {
    // Sample user opinions data
    const userOpinions = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1617724748068-691efeeaf542?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Excelente experiência de compra. Produto de alta qualidade e entrega rápida!',
            rating: 5 // Rating out of 5
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1502031882019-24c0bccfffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Fiquei muito satisfeita com a compra. Ótimo atendimento e produto conforme anunciado.',
            rating: 4 // Rating out of 5
        },
        {
            id: 3,
            name: 'Alice Johnson',
            photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Recebi o produto antes do prazo e estou muito contente com a qualidade.',
            rating: 5 // Rating out of 5
        },
        {
            id: 4,
            name: 'Michael Brown',
            photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'O processo de compra foi simples e o produto chegou em perfeitas condições.',
            rating: 4 // Rating out of 5
        }
    ];

    return (
        <div className="row">
            {userOpinions.map(opinion => (
                <div key={opinion.id} className="col-md-3">
                    <div className="card">
                        <img src={opinion.photo} className="card-img-top image-cover" style={{height:"200px"}}   alt={opinion.name} />
                        <div className="card-body">
                            <h5 className="card-title">{opinion.name}</h5>
                            <p className="card-text">{opinion.description}</p>
                            <div>
                                {Array.from({ length: opinion.rating }, (_, index) => (
                                    <FaStar key={index} color="#ffc107" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserOpinions;
