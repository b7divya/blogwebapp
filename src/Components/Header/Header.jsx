import React from "react";
import { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-container-left'>
                <img src="" alt="" />
            </div>
            <div className='header-container-center'>
                <div className='header-container-center-searchbar'>
                    <input id='searchbar' type="text" placeholder='Search Destination' />
                    <button id='search'>
                        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className='header-container-right'>
                <div className='header-container-right-one'>
                    <button id='language' >
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faCaretDown} className='caret-icon' />
                    </button>
                    {showDropdown && (
                        <ul className='language-dropdown'>
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Français</li>
                        <li>Mandrine</li>
                        </ul>
                    )}
                </div>
                <div className='header-container-right-two'>
                    <button id='login'>Login</button>
                    <button id='signup'>Signup</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header