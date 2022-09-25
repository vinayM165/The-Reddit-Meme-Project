import logo from './logo.svg';
import './App.css';
import Cards from './Card';
import { CardGroup } from 'react-bootstrap';

function Navbars() {
  return (<>
  <nav className="navbar navbar-light bg-dark">
  <a className="p-3 navbar-brand" href="#">
    <img src="https://cdn.dribbble.com/users/1042494/screenshots/3762457/media/ca105dfc0a30e927a82afd4e19420df2.png" width="70" height="60" alt=""/>
  </a>
  <h1 className='m-3 mx-auto text-light'>Meme Space</h1>
</nav>
    </>
  );
}

export default Navbars;
