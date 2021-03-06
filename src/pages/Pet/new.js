import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col, Table} from 'react-bootstrap';


function New() {
  const [tipo, setTipo] = useState([{tipo: 'Gato'}, {tipo: 'Cachorro'}, {tipo: 'Coelho'}, {tipo: 'Passaro'}]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [nome, setNome] = useState('');
  const [pets, setPets] = useState([]);

  function handleTipoSelecionado(e){
    //console.log('tipo', e.target.value); 
    setTipoSelecionado(e.target.value);
  }

  function handleNomePet(e){
    //console.log(e.target.value);
    setNome(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setPets([...pets,
      {
      id: new Date().getTime(),
      nome: nome,
      tipo: tipoSelecionado}
    ]);

    let pestSalvos = [];
    pestSalvos.push(pets);
    localStorage.setItem('pets', JSON.stringify(pestSalvos));

    setTipoSelecionado(0);
    setNome('');
  }
  return (
    <div>
     
      <Container>
                  <h4 className="mt-5 p-3 rounded">Cadastro de Pet</h4>
                  <Row className="mt-5">
                      <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                          <Form>

                          <Form.Label>Tipo</Form.Label>
                              <Form.Select aria-label="Default select example" value={tipoSelecionado} onChange={handleTipoSelecionado} >
                               <option>Selecione um tipo</option>
                                {tipo.map((item, index)=>{
                                  return(
                                    <option key={item.id}>
                                       {item.tipo}
                                    </option>
                                  )
                                })}
                              </Form.Select>
                              
                              <Form.Group controlId="formBasicName">
                                  <Form.Label>Nome</Form.Label>
                                  <Form.Control type="name" placeholder="Digite o nome do seu pet" value={nome} onChange={handleNomePet}/>
                              </Form.Group>
                              <Button variant="dark btn-block mt-2" type="submit" onClick={handleSubmit}>
                                  Cadastrar
                              </Button>
                          </Form>
                      </Col>
                  </Row>
                  <h6 className="mt-5 p-5 text-center text-secondary ">Copyright ?? 2022 bento's. Todos os direitos reservados.</h6>
              </Container>
    </div>
  );
}

export default New;
