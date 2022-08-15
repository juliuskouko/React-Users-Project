import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row  , Col} from "react-bootstrap";
import "./App.css"
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users: [
        {
          name: "Julius Atsu",
          email: "julius@gmail.com",
          gen: 22
        },

        {
          name: "Enam Kadeh",
          email: "enam@gmail.com",
          gen: 20
        },

        {
          name: "Anita Donkor",
          email: "anita@gmail.com",
          gen: 12
        },

        {
          name: "Andy Donkor",
          email: "andy@gmail.com",
          gen: 15
        },
      ]
    }
  }
  addNewUser=(user)=>{
    this.setState({
      users: [...this.state.users,user ]
    })
  }
  render() {
    return (
      <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <AddUserForm addUser={this.addNewUser}/>
          </Col>
          <Col>
            <Users usersDate={this.state.users}/>
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}

export default App;
