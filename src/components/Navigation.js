import React from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { InfoPath } from '../routes';

function Navigation(){
  return(
    <>
      <nav className="navigation">
        <ul>
          <li>Daftar Grup</li>
          <li>Buat Grup</li>
          <li>
            <Link to={InfoPath}><AiOutlineInfoCircle /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;