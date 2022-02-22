import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Container} from 'react-bootstrap';

function Show (){
    const [pets, setPets] = useState([{}]);

    useEffect(()=>{
      const lista = localStorage.getItem('pets');
      setPets(JSON.parse(lista));
      console.log(pets);
    },[]);

    function handleDelete(id){
      console.log(id)
       for (var i = 0; i < pets.length; i++) {
         if(pets[i].id === id){
          console.log(pets[i])
          localStorage.removeItem('pets[i]');
      }
     }
    }
   
    return(
        <div>
          <Container> 
          
          <h4 className="mt-5 p-3 rounded">Lista de Pets</h4>
          
          {pets.length === 0 && <h6 className='mt-2'>Você não possui nenhum pet cadastrato</h6>}

            <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                {pets.map((item)=>{
                  return(   
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.tipo}</td>
                    <td>
                      <button
                        className='float-left'
                        onClick={ () => handleDelete(item.id)}>
                        Excluir
                       </button>
                    </td>
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