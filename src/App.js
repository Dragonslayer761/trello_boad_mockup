import './App.css';
import AppContainer from './Component/app-container/AppContainer';
import { Container,Row,Col } from 'react-bootstrap'

const headerStyle={
  backgroundColor :"blue",
  height: "40px",
  
}


function App() {
  return (
    <div className="App">
      <header>
      <Container fluid>
           <div id="header">
           <Row>
                <Col md={12} style={headerStyle}>
                    <span >Trello Board</span>
                </Col>
            </Row>
           </div>

        </Container>
      </header>
      <body >
        <AppContainer/>
      </body>
    </div>
  );
}

export default App;
