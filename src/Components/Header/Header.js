import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <nav>
                <div className='header'>
                    <FontAwesomeIcon icon={faDumbbell} className='icon'></FontAwesomeIcon>
                    <a href="/home">Aster Exercise Club</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;