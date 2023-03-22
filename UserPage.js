import {useState, useEffect} from 'react';
import {Table, Container, Row,  Col} from 'react-bootstrap';
import axios from 'axios';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";



const api ="http://localhost:5001/user";

function App() {
  const [data, setData] = useState([]);
  
  
  
  useEffect(()=>{
    loadUsers()
  },[]);

  

  const loadUsers = async ()=>{
    const response = await axios.get(api);
    setData(response.data);
  }
  loadUsers();
  
  return (
    <>
      <ToastContainer />
      <div className='justify-content-center' style={{marginLeft:'400px'}}>
        <h1>User Page</h1>
      </div>
      <div className='justify-content-center' style={{marginLeft:'900px'}}>
        <input type="text" className='form-control' style={{width:'240px'}} placeholder='Search'/>
      </div>
      <Container style={{marginLeft:'100px', marginTop:'70px'}} >
        <Row>
          <Col>
            <Table data={data}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First_Name</th>
                  <th>Last_Name</th>
                  <th>City</th>
                  <th>State</th>
                </tr>
              </thead>
              {data.map((item,index)=>(
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                  </tr>
                </tbody>
                
              ))}
            </Table>
            
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
