import { Outlet, Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <div>
        <Link to="/">HomePage</Link>
        
      </div> 
      
      <div>
        <Link to="/login">LoginPage</Link>
      </div>
      <div>
        <Link to="/register">RegisterPage</Link>
      </div>
      <div>
        <Link to="/user">UserPage</Link>
      </div>
      <Outlet />
    </>
  )
};

export default HomePage;