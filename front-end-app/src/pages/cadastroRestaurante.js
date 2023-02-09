import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/crestaurant.css';
import '../css/index.css';
import React, { Component } from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: "https://youhungryoic-axxafsuovdwu-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/RESTAURANTE_API/1.0",
});

const token = "aGFja2FjbG91ZHNpbnFpYXRpbWUwNUBnbWFpbC5jb206SGFja2FjbG91ZHNpbnFpYTA1Kg=="

const options = {
    headers: {
		  "Access-Control-Allow-Origin": "*",
        'Authorization': `Basic ${token}`
    }
}

export default class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
			   NOME: '',
			   PASSWORD: '',
            ESPECIALIDADE: '',
            ENDERECO: '',
            CIDADE: '',
            CEP: '',
            CNPJ: ''
        }
    }

    changeField(field, event) {
        let _filed = event.target.value;
        this.setState(prevState => {
            let nextState = Object.assign({}, prevState);
            nextState[field] = _filed;
            return nextState;
        })
    }

    submitForm(e) {
        e.preventDefault();
        api.post('/restaurantes', this.state, options).then(res => {
            console.log(res.data)
        }).catch(error => {
				console.log(error.message);
			})
    }

    render() {
        return (
            <div className="center">
                <Menu />
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={this.submitForm.bind(this)}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridNome">
                                        <Form.Label className="details-form">Nome</Form.Label>
                                        <Form.Control className="font-forms" type="text" placeholder="Informe o nome do restaurante" value={this.state.nome} onChange={this.changeField.bind(this, 'NOME')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className="details-form">Password</Form.Label>
                                        <Form.Control className="font-forms" type="password" placeholder="Password" value={this.state.password} onChange={this.changeField.bind(this, 'PASSWORD')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEspecialidade">
                                        <Form.Label className="details-form">Especilidade</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe a especilidade do estabelecimento" value={this.state.especialidade} onChange={this.changeField.bind(this, 'ESPECIALIDADE')} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCNPJ">
                                        <Form.Label className="details-form">CNPJ do Restaurante</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe o CNPJ do estabelecimento" value={this.state.cnpj} onChange={this.changeField.bind(this, 'CNPJ')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridendereco">
                                    <Form.Label className="details-form">Enreceço</Form.Label>
                                    <Form.Control className="font-forms" placeholder="Informe o endereço" value={this.state.endereco} onChange={this.changeField.bind(this, 'ENDERECO')} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCidade">
                                        <Form.Label className="details-form">Cidade</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe a cidade" value={this.state.cidade} onChange={this.changeField.bind(this, 'CIDADE')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCep">
                                        <Form.Label className="details-form">CEP</Form.Label>
                                        <Form.Control className="font-forms" placeholder="Informe o CEP" value={this.state.cep} onChange={this.changeField.bind(this, 'CEP')} />
                                    </Form.Group>
                                </Form.Row>
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
