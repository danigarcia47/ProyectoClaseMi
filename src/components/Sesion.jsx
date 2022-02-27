import React from 'react';
import { Container , Form, Button } from 'react-bootstrap';
import { DatosTablaUsuario }from '../data/DatosUsuario.js';

class Sesion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {user: '' , password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPassword.current.value,
    });
  }

  registro() {
    <div className="main-site">
    <h1>Inicio sesión</h1>
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="email" placeholder="Usuario" ref={this.inputUser}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña: </Form.Label>
          <Form.Control type="password" placeholder="Contraseña" ref={this.inputPassword}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.login}>Login</Button>
        <p/>
        <Button variant="primary" type="button" onClick={this.registro}>Regístrame</Button>
      </Form>
    </Container>
  </div>
  }

  recargar() {
    localStorage.removeItem('user'),
    localStorage.removeItem('pass');
    location.reload();
  }

  componentDidMount(){
    this.setState({user:localStorage.getItem('user'), password:localStorage.getItem('password'),email:localStorage.getItem('correo'),})
  }

  render() {
    if(this.state.user == DatosTablaUsuario.usuario && this.state.password == DatosTablaUsuario.pass){
      return(
        this.bienvenido
      );
    }else{
      if(this.state.password != DatosTablaUsuario.pass){
        return(
          this.incorrecto
        );
      } else{
        this.registro
      }
      return(
        this.registro
      );
    }
  }
  
  componentWillUnmount(){
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('pass', this.state.password);
  }

  inicio(){
    <div className="main-site">
    <h1>Inicio sesión</h1>
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="email" placeholder="Usuario" ref={this.inputUser}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña: </Form.Label>
          <Form.Control type="password" placeholder="Contraseña" ref={this.inputPassword}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.login}>Login</Button>
        <p/>
        <Button variant="primary" type="button" onClick={this.registro}>Regístrame</Button>
      </Form>
    </Container>
  </div>
  }

  bienvenido(){
    <div className="main-site">
    <h1>Bienvenido {this.state.user}!</h1>
    <p/>
    <Button variant="primary" type="button" onClick={this.recargar}>Cerrar Sesión</Button>
  </div>
  }

  incorrecto(){
    <div className="main-site">
    <h1>Usuario o contraseña incorrecto {this.state.user}!</h1>
    <p/>
    <Button variant="primary" type="button" onClick={this.recargar}>Recargar</Button>
  </div>
  }

}
export default Sesion;