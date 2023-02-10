import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cprato.css';
import '../css/index.css';
import React,{Component} from 'react';
import axios from "axios";

const api = axios.create({
	baseURL: "https://youhungryoic-axxafsuovdwu-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/PRATOS_API/1.0",
});

const token = "aGFja2FjbG91ZHNpbnFpYXRpbWUwNUBnbWFpbC5jb206SGFja2FjbG91ZHNpbnFpYTA1Kg=="

const options = {
	headers: {
		 "Access-Control-Allow-Origin": "*",
		 'Authorization': `Basic ${token}`
	}
}

export default class Food extends Component {
    
    constructor(props){
        super(props);
            this.state ={
                NOME: '',
                DESCRICAO: '',
                RESTAURANTE:'',
                TEMPOPARAPREPARO:'',
                ACOMPANHAMENTO:'',
                PRECO:'',
                URL:''
            }
        }

        changeField(field,event){
            let _filed = event.target.value;
            this.setState(prevState => {
                let nextState = Object.assign({},prevState);
                nextState[field] = _filed;
                return nextState;
            })
        }

        submitForm(e){
                e.preventDefault();
                api.post('/pratos', this.state, options).then(res => {
					 document.getElementById("formulario").reset();
					 alert("Prato cadastrado com sucesso!");
		
                    console.log(res.data)
                })
        }

    render(){
  return (
<div className="center">
        <Menu/>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form id="formulario" onSubmit={this.submitForm.bind(this)}>
                            <Form.Group controlId="formGridNome">
                            <Form.Label className="details-form">Nome do Prato</Form.Label>
                            <Form.Control  className="font-forms" type="text" placeholder="Informe o email" value={this.state.nome} onChange={this.changeField.bind(this,'NOME')} />
                            </Form.Group>

                        <Form.Group controlId="formGridDescricao">
                            <Form.Label className="details-form">Descrição do prato</Form.Label>
                            <Form.Control  as="textarea" rows={3} className="font-forms" placeholder="Informe o descritivo do prato" value={this.state.descricao} onChange={this.changeField.bind(this,'DESCRICAO')} />
                        </Form.Group>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridendereco">
                            <Form.Label className="details-form">Restaurante</Form.Label>
                            <Form.Control  className="font-forms" type="number" placeholder="Informe o restaurante" value={this.state.restaurante} onChange={this.changeField.bind(this,'RESTAURANTE')} />

                            {/* <Form.Control  as="select"  className="font-forms select-forms" placeholder="Informe o endereÃ§o" value={this.state.restaurante} onChange={this.changeField.bind(this,'restaurante')} >
                                <option>Restaurante 1</option>
                                <option>Restaurante 2</option>
                            </Form.Control> */}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPreco">
                            <Form.Label className="details-form">Preço do prato</Form.Label>
                            <Form.Control  className="font-forms" placeholder="Informe o preço do prato" value={this.state.preco} onChange={this.changeField.bind(this,'PRECO')} />
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridtempoParaPreparo">
                            <Form.Label className="details-form">Tempo para preparo</Form.Label>
                            <Form.Control  className="font-forms" placeholder="Informe o tempo médio para preparar o pedido" value={this.state.tempoParaPreparo} onChange={this.changeField.bind(this,'TEMPOPARAPREPARO')} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAcompanhamento">
                            <Form.Label className="details-form">Acompanhamento</Form.Label>
                            <Form.Control  className="font-forms" type="text" placeholder="Informe o acompanhamento" value={this.state.acompanhamento} onChange={this.changeField.bind(this,'ACOMPANHAMENTO')} />

                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridNome">
                            <Form.Label className="details-form">Imagem do prato (URL)</Form.Label>
                            <Form.Control  className="font-forms" type="text" placeholder="Informe a url da imagem (dica use o bucket)" value={this.state.url} onChange={this.changeField.bind(this,'URL')} />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
</div>
  );
}
}
