import React, { useState } from 'react'
import menu from './../../asset/menu.png'
import connect from './../../asset/connect-icon.png'
import close from './../../asset/close.png'
import "./Navbar.css"
const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
      <>
          <div className="container-fluid mt-3">
              
                  <nav className="navbar navbar-expand-lg navbar-light ">
                      <div className="container-fluid p-2">
                      <div onClick={ToggleSidebar} >
                                 <img className="menu-btn"  src={menu} />
                              </div>
                          <a className="navbar-brand text-light logo"><img src='https://app.lexer.markets/assets/logo_LEXER-80aa9bef.svg' className='logo-img'/></a>
                          <div className="form-inline ml-auto">
                              <button  className='connect-btn'>
                                <img src={connect}/> Connect</button>
                          </div>
                      </div>
                  </nav>
                  <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                      <div className="sd-header">
                          <h4 className="mb-0"><img src='https://app.lexer.markets/assets/logo_LEXER-80aa9bef.svg' className='logo-img'/></h4>
                          <div className="btn" onClick={ToggleSidebar}>
                            <img className="close-btn" src={close}/>
                          </div>
                      </div>
                      <div className="sd-body">
                          <ul>
                              <li><a className="mb-0 sd-link">Dashboard</a></li>
                              <li><a className="sd-link">Migrate V1 Assets</a></li>
                              <li><a className="sd-link">LexStake</a></li>
                              <li><a className="sd-link">Liquidty</a></li>
                              <li><a className="sd-link">Trade</a></li>
                              <li><a className="sd-link">Leaderboard</a></li>
                              <li><a className="sd-link">V2 Launch</a></li>
                             
                          </ul>
                      </div>
                  </div>
                  <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
         </div>
         
      </>
  )
}
 export default ToggleSidebar;