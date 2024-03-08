import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-center text-black text-lg-start mt-5" style={{ backgroundColor:"#D7F9DB "}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Sobre Nós</h5>
                        <p className="text-justify">Somos uma farmácia comprometida com a sua saúde e bem-estar. Oferecemos uma ampla gama de produtos farmacêuticos, além de serviços especializados para atender às suas necessidades.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links Rápidos</h5>
                        <ul className="list-unstyled mb-0 text-dark">
                            <li>
                                <a href="#" className="text-dark">Produtos</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Serviços</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Promoções</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contato</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#" className="text-dark">Telefone: +55 (XX) XXXX-XXXX</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Endereço: Rua da Saúde, 1234</a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">Email: contato@farmacia.com.br</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2024 Desenvolvido por <FaLinkedin color="blue"/> <a href="https://www.linkedin.com/in/edson-casimiro-435500137/" className="text-primary">Edson Casimiro</a>
            </div>
        </footer>
    )
}

export default Footer;
