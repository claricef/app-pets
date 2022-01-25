import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

function Show (){
    const [pets, setPets] = useState([]);

    return(
        <div>
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
        </div>
    )
}

export default Show;