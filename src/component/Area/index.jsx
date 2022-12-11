import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageArea = (area) => {
  return (
    <div className='empty-area'>
      <div className='page-link-parent'>
      {
        area.menu != null?(
            area.menu.map((v,i)=>(
              <Link className='page-link' to={v.link} key={'menu-link-'+i}>{v.name}</Link>
            ))
          
        ):("")
      }
      </div>
    </div>
  )
}

export default PageArea;
