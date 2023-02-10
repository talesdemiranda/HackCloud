import Menu from './menu.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cpedido.css';
import '../css/index.css';
import React,{Component} from 'react';
import axios from "axios";

const api = axios.create({
	baseURL: "https://youhungryoic-axxafsuovdwu-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/PEDIDOS_API/1.0",
});

const token = "aGFja2FjbG91ZHNpbnFpYXRpbWUwNUBnbWFpbC5jb206SGFja2FjbG91ZHNpbnFpYTA1Kg=="

const options = {
	headers: {
		 "Access-Control-Allow-Origin": "*",
		 'Authorization': `Basic ${token}`
	}
}

export default class Restaurant extends Component {
    
    constructor(props){
        super(props);
            this.state ={
                pedido: [{NOMEPEDIDO:'Yaksoba',DESCRICAOPEDIDO:'Feito com noodles de trigo crocantes e cobertos com um molho de soja deliciosamente adocicado, nossos legumes frescos e cortados na hora, incluindo cenoura, repolho e cebola, são salteados até ficarem crocantes, combinando perfeitamente com o suculento frango grelhado ou camarões. Tudo isso é servido em uma tigela quente!!!',NOMERESTAURANTE:'Restaurante 1',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 35,00',IMG:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/WoaCFXZZ1FnswvaEWeWlH1V8U4VzpMDheGrSKY9ESL-HjILOBSpO4q261Zyj-6l1/n/axxafsuovdwu/b/bucket-HackCloudImagens/o/DEKIDIN_YAKISO_HackCloud.png'},
                {NOMEPEDIDO:'Filé ao molho Gorgonzola',DESCRICAOPEDIDO:'Um clássico digno de reis, é uma verdadeira obra-prima culinária. Cada pedaço de filé mignon é preparado com habilidade, resultando em uma carne macia e suculenta, coberta com um molho cremoso de gorgonzola. O sabor forte do queijo combina perfeitamente com a carne. Servido com batatas cozidas suavemente e verduras crocantes!!!',NOMERESTAURANTE:'Restaurante 2',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 40,00',IMG:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/6raGiHX_7q6GYsbCvVMfTWQ5ihgPRkIQ1i0mvZxtvClpTpp3RODIbD9W6WBh5P91/n/axxafsuovdwu/b/bucket-HackCloudImagens/o/file_mignon_ao_molho_gorgonzola_HackCloud.jpg'},
                {NOMEPEDIDO:'Paella',DESCRICAOPEDIDO:'Uma viagem culinária pelas praias da Espanha com nosso irresistível prato! Arroz sauté coberto com frutos do mar frescos e suculentos, incluindo camarões, lulas e mexilhões, além de vegetais crocantes, como pimentão vermelho e verde, e cebola dourada. Servido em uma grande tigela é perfeita para compartilhar com a familiares!!!',NOMERESTAURANTE:'Restaurante 3',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 80,00',IMG:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/jnzVozbyrU9dvk72QMJLTUWOjDvhoNV-vGKMloVFxDrG3Dzz8_u5RmXKblwoHZ11/n/axxafsuovdwu/b/bucket-HackCloudImagens/o/Paella_HackCloud.png'}]
            }
        }

        submitPedido(e){
            e.preventDefault();
                alert("Pedido realizado com sucesso!!!");
                api.post('pedidos/', this.state.pedido[e.target.value], options).then(res => {
						console.log(res.data)
				  })
		}

    render(){
  return (
<div className="center">
        <Menu/>
        <Container>
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    {this.state.pedido.map((pedido,index) =>{
                        if(index <= 0){
                            return (
                            
                                <Col md={{ span: 3, offset: 0 }}>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" className="card-image" src={pedido.IMG} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.NOMEPEDIDO}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.DESCRICAOPEDIDO}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.NOMERESTAURANTE}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.TEMPOMEDIOPREPARO}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.PRECO}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                            )
                        } else {
                            return(
                            <Col md={{ span: 3, offset: 1 }}>
                   <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top"  className="card-image" src={pedido.IMG} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.NOMEPEDIDO}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.DESCRICAOPEDIDO}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.NOMERESTAURANTE}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.TEMPOMEDIOPREPARO}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.PRECO}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>)
                        }
                    })}
                </Col>
            </Row>
        </Container>
</div>
  );
}
}
