"use client"
import ExampleNavbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PubCard from "./components/pubCard";
import MyCard from "./components/categoryCard";
import ProductCard from "./components/productSellCard";
import UserOpinions from "./components/userOpinion";
import { FaCirclePlus } from "react-icons/fa6";
import Footer from "./components/footer";
import SubscriptionInvitation from "./components/subscriptionInvite";

export default function Home() {

  const produtos = [
    {
      id: 1,
      nome: 'Paracetamol',
      descricao: 'Medicamento para alívio da dor e febre.',
      preco: 10.99,
      imagem: 'https://plus.unsplash.com/premium_photo-1664373622315-61c8ba4282a8?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Analgésico',
      componentes: ['Paracetamol'],
      fabricacao: '2022-01-01',
      expiracao: '2023-01-01',
      origem: 'Brasil',
      quantidadeEstoque: 100
    },
    {
      id: 2,
      nome: 'Ibuprofeno',
      descricao: 'Anti-inflamatório e analgésico.',
      preco: 8.5,
      imagem: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Anti-inflamatório',
      componentes: ['Ibuprofeno'],
      fabricacao: '2022-02-15',
      expiracao: '2023-02-15',
      origem: 'EUA',
      quantidadeEstoque: 80
    },
    {
      id: 3,
      nome: 'Dipirona',
      descricao: 'Analgésico e antipirético.',
      preco: 7.25,
      imagem: 'https://plus.unsplash.com/premium_photo-1664373622315-61c8ba4282a8?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Analgésico',
      componentes: ['Dipirona'],
      fabricacao: '2021-12-10',
      expiracao: '2023-12-10',
      origem: 'Alemanha',
      quantidadeEstoque: 120
    },
    {
      id: 4,
      nome: 'Omeprazol',
      descricao: 'Inibidor de bomba de prótons.',
      preco: 15.75,
      imagem: 'https://images.unsplash.com/photo-1625055929490-1ced51017e72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Antiácido',
      componentes: ['Omeprazol'],
      fabricacao: '2022-03-20',
      expiracao: '2023-03-20',
      origem: 'Índia',
      quantidadeEstoque: 60
    },
    {
      id: 5,
      nome: 'Simeticona',
      descricao: 'Antiflatulento.',
      preco: 12.0,
      imagem: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Antiflatulento',
      componentes: ['Simeticona'],
      fabricacao: '2022-04-05',
      expiracao: '2023-04-05',
      origem: 'Suíça',
      quantidadeEstoque: 90
    },
    {
      id: 6,
      nome: 'Cloridrato de Ciprofloxacino',
      descricao: 'Antibiótico.',
      preco: 20.5,
      imagem: 'https://images.unsplash.com/photo-1625055929490-1ced51017e72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Antibiótico',
      componentes: ['Cloridrato de Ciprofloxacino'],
      fabricacao: '2022-05-12',
      expiracao: '2023-05-12',
      origem: 'França',
      quantidadeEstoque: 70
    },
    {
      id: 7,
      nome: 'Sinvastatina',
      descricao: 'Hipolipemiante.',
      preco: 18.25,
      imagem: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Hipolipemiante',
      componentes: ['Sinvastatina'],
      fabricacao: '2022-06-25',
      expiracao: '2023-06-25',
      origem: 'Canadá',
      quantidadeEstoque: 110
    },
    {
      id: 8,
      nome: 'Atenolol',
      descricao: 'Betabloqueador.',
      preco: 14.0,
      imagem: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Anti-hipertensivo',
      componentes: ['Atenolol'],
      fabricacao: '2022-07-30',
      expiracao: '2023-07-30',
      origem: 'Holanda',
      quantidadeEstoque: 50
    },
    {
      id: 9,
      nome: 'Salbutamol',
      descricao: 'Broncodilatador.',
      preco: 11.75,
      imagem: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Broncodilatador',
      componentes: ['Salbutamol'],
      fabricacao: '2022-08-14',
      expiracao: '2023-08-14',
      origem: 'Suécia',
      quantidadeEstoque: 85
    },
    {
      id: 10,
      nome: 'Captopril',
      descricao: 'Inibidor da enzima conversora de angiotensina.',
      preco: 16.5,
      imagem: 'https://images.unsplash.com/photo-1625055929490-1ced51017e72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoria: 'Anti-hipertensivo',
      componentes: ['Captopril'],
      fabricacao: '2022-09-22',
      expiracao: '2023-09-22',
      origem: 'Espanha',
      quantidadeEstoque: 95
    },
  ];


  const category = [
    {
      nome: 'Sexalidade e fertilidade',
      descricao: 'Medicamento para alívio da dor e febre.',
      imagem: 'https://thisisafrica.me/wp-content/uploads/2014/02/Kissing-couple-760-x-420.jpg',
  },
    {
      nome: 'Mamã e bebê',
      descricao: 'Medicamento para alívio da dor e febre.',
      imagem: 'https://plus.unsplash.com/premium_photo-1674767573618-9bb9b043f05b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      nome: 'Vida Saudável',
      descricao: 'Medicamento para alívio da dor e febre.',
      imagem: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      nome: 'Cuidados e Cosméticos',
      descricao: 'Medicamento para alívio da dor e febre.',
      imagem: 'https://plus.unsplash.com/premium_photo-1708333929203-c2e04ff21860?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]


  // const categorias = Array.from(new Set(produtos.map(produto => produto.categoria)));
  // const displayedProductIds = [];



  return (

    <>
      <ExampleNavbar/>
      <div>
        <div>
        </div>
        <PubCard/>
      </div>


      <div className="text-center " style={{ marginTop: "10%" }}>
        <h1 className="text-semibold mb-5">
          Que Categoria Vai Explorar Primeiro?
        </h1>
        <div className="container">
          <div className="row">
            {category.map(categoria => (
              // Filtrar produtos por categoria e selecionar apenas o primeiro produto não exibido
                  <div key={categoria} className="col-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <MyCard data={categoria} />
                  </div>
             // Retorna null se nenhum produto for encontrado para a categoria
            ))}
          </div>
        </div>
      </div>




      <div style={{ marginTop: "10%" }}>
        <h1 className="text-center mb-5">
          Temos o que procura, a bom preço.
        </h1>
        <div className="container-fluid">
          <div className="row">
            {produtos.slice(0, 6).map(product => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3 col-xl-3 mb-5">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-lg btn-primary">Ver Mais Produtos <FaCirclePlus />
</button>
        </div>
      </div>




<div style={ {marginTop:"15%"}}>
              <h2 className="text-center mb-3">Avaliação Dos Clientes</h2>
              <UserOpinions/>
</div>
<SubscriptionInvitation/>
<Footer/>
      
    </>
  );
}
