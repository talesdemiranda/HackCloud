import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/index.css';
import '../css/login.css';
import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

const api = axios.create({
	baseURL: "https://youhungryoic-axxafsuovdwu-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/LOGIN_API/1.0",
});

const token = "aGFja2FjbG91ZHNpbnFpYXRpbWUwNUBnbWFpbC5jb206SGFja2FjbG91ZHNpbnFpYTA1Kg=="

const options = {
	headers: {
		 "Access-Control-Allow-Origin": "*",
		 'Authorization': `Basic ${token}`
	}
}

export default class Login extends Component {

    constructor(props){
        super(props);
            this.state ={
                login: '',
                password: '',
                redirect: false
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
					api.post('/login', this.state, options).then(res => {
					console.log(res.data)

					if(res.data['status'] !== ""){
						this.setState(prevState => {
							 let nextState = Object.assign({},prevState);
							 nextState.redirect = true;
							 return nextState;
						})
				  }
				  else {
					alert("Senha inválida");
				}

				})

        }
    
render(){
    if(this.state.redirect){
        return <Redirect to="/home"/>
    } else{
            return(
                <div className="center">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                        <Image className="image-details" src="https://objectstorage.us-phoenix-1.oraclecloud.com/p/Duyj_SoPRpfnhWSyUJ-pgeznKxwA6nLsitPO9ypMzj7lF0XOjh6Zz1x7-kfZ5tLa/n/axxafsuovdwu/b/bucket-HackCloudImagens/o/Logo_HackCloud.png" rounded />
                        <Form onSubmit={this.submitForm.bind(this)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="details-form" >Email</Form.Label>
                                    <Form.Control type="email" className="font-forms" placeholder="Informe o email" value={this.state.email} onChange={this.changeField.bind(this,'login')}/>
                                        <Form.Text className="text-muted">
                                            Informe seu e-mail pessoal
                                        </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="details-form">Password</Form.Label>
                                    <Form.Control type="password" className="font-forms" placeholder="Password"  value={this.state.password} onChange={this.changeField.bind(this,'password')}/>
                                </Form.Group>
                                <Button variant="danger" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            )  
        }

        }
}
