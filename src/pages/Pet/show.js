import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Container} from 'react-bootstrap';

function Show (){
    const [pets, setPets] = useState([
      {id: 1, nome: "bento", tipo: "gato"},
      {id: 1, nome: "bento", tipo: "gato"},
      {id: 1, nome: "bento", tipo: "gato"},
      {id: 1, nome: "bento", tipo: "gato"}]);

    return(
        <div>
          <Container> 
          <h4 className="mt-5 p-3 rounded">Lista de Pets</h4>
            <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                {pets.map((item, index)=>{
                  return(   
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.tipo}</td>
                  </tr>
                  )
              })}
                </tbody>
              </Table>
            </Container>
        </div>
    )
}

export default Show;