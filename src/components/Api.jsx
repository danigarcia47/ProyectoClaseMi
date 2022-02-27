import React from 'react';
import uuid from 'react-uuid';
import { Form, Card, Container, Table, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item});
  };
 
  async componentDidMount(){
    const response = await fetch('http://ergast.com/api/f1/2021/drivers');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render(){
      return (
        <div className="main-site">
          <h3>Pilotos de la temporada 2021</h3>
          <Container>
            <Row>
              <Col>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Número</th>
                      <th>Nacionalidad</th>
                      <th>Nacimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((item) => {
                      return (
                        <tr key={uuid()} onClick={() => this.changeSelected(item)}>
                          <td>{item.GivenName}</td>
                          <td>{item.FamilyName}</td>
                          <td>{item.PermanentNumber}</td>
                          <td>{item.Nationality}</td>
                          <td>{item.DateOfBirth}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}
export default Api;