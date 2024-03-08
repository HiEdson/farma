import React from 'react';

const SubscriptionInvitation = () => {
    return (
       
        <div className="container text-center w-75 rounded " style={{ marginTop: "14%", marginBottom: "14%", backgroundColor:"#8FC196"}}>
            <h2>Mantenha-se atualizado com as últimas notícias e ofertas especiais.</h2>
            <p>Além disso, receba 2% de desconto em comprar acima de 25 mil kz ao se inscrever.</p>
            <p>Insira o seu número de telefone:</p>
            <div className="input-group mb-3 mx-auto w-lg-50 w-100">
                <input type="tel" className="form-control " placeholder="Seu número de telefone" aria-label="Seu número de telefone" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary bg-white text-dark" type="button" id="button-addon2">Inscrever</button>
            </div>
            <p>Você concorda com nossos Termos e Condições e Política de Privacidade.</p>
        </div>
    );
}

export default SubscriptionInvitation;
