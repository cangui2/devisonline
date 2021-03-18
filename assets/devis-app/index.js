import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import InputField from "./components/InputField";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Result from "./components/Result";


function App (props) {
    const [data,setData]=useState([]);

    const handleReceive =(value)=> {

        setData(value);
    }



  return (
      <Container fluid >
          <Row>
              <Col xs={6}>
                  <InputField
                      onReceiveData={(value)=>handleReceive(value)}
                  />
              </Col>
              <Col>
                  <Result data={data}/>
              </Col>
          </Row>
      </Container>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
   document.getElementById('root')
 );

