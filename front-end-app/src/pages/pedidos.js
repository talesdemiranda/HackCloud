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
                pedido: [{NOMEPEDIDO:'Bife acebolado',DESCRICAOPEDIDO:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',NOMERESTAURANTE:'Restaurante 1',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 35,00',IMG:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Ceqy-Ye8N3S-QGyR5flge0w8r62TBYVFwpkDTpsgi4S15AlWiBuSRb3ZCqQqmHN1/n/oraclemetodista/b/bucket-teste/o/bife-acebolado1.jpg'},
                {NOMEPEDIDO:'Bife acebolado',DESCRICAOPEDIDO:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',NOMERESTAURANTE:'Restaurante 2',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 40,00',IMG:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/du6byfRVaVdKyLlbCZMJmEXqNSKIAkZPlhmKPLVaf_uh4gen_n-lDDx1C8cXnnXW/n/oraclemetodista/b/bucket-teste/o/bife-acebolado2.jpg'},
                {NOMEPEDIDO:'Bife acebolado',DESCRICAOPEDIDO:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',NOMERESTAURANTE:'Restaurante 3',TEMPOMEDIOPREPARO:'33min',PRECO:'R$: 80,00',IMG:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/yT0Fsm8BsJllaXoUUD-qVlwxOq9OrqvCCU0p0eWZ90zaSM3YIB-5L3cSIimwKy2Q/n/oraclemetodista/b/bucket-teste/o/bife-acebolado3.jpg'}]
            }
        }

        submitPedido(e){
            e.preventDefault();
                alert(JSON.stringify(this.state.pedido[e.target.value]));
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
                        <Card.Img variant="top" src={pedido.IMG} />
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
