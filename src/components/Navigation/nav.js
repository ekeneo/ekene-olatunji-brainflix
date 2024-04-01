import { useState } from 'react'; 
import logoImg from '../../assets/Logo/BrainFlix-logo.svg';
import searchLogo from '../../assets/Icons/search.svg';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';
import './nav.scss';

const Navigation = () => {
  // Define state for the search input value
  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className='nav'>
      <img className='nav__logo' src={logoImg} alt="BrainFlix-logo" />
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
      <button className='nav__upload1'>UPLOAD</button>
    </nav>
  );
};

export default Navigation;
