import { useState } from 'react'; 
import {Link} from "react-router-dom";
import logoImg from '../../assets/Logo/BrainFlix-logo.svg';
import searchLogo from '../../assets/Icons/search.svg';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';
import './nav.scss';

const Navigation = () => {
  // Define state for the search input value
  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className='nav'>
      <Link to="/">
        <img className='nav__logo' src={logoImg} alt="BrainFlix-logo" />
      </Link>
      <div className='nav__search-container'>
        {/* search start */}
        <input className="nav__search" 
        type="text" 
        name="search" 
        placeholder="Search" 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}>
        </input>
        {/* search end */}
        <button className='nav__upload2'>UPLOAD</button>
        <img
          src={userIcon}
          alt="User Icon"
          className="nav__user-icon"
        />
      </div>
      <Link to="/upload">
        <button className='nav__upload1'>UPLOAD</button>
      </Link>
    </nav>
  );
};

export default Navigation;
