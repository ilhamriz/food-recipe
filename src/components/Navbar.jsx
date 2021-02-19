import React, { Component } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import {logo} from '../images/index'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      scroll: false,
      menu: [
        {
          name: 'Search',
          to: '/',
          hide: true
        },
        {
          name: 'Recipes',
          to: { pathname:'/all-recipe', state: 'date'}
        },
        {
          name: 'Share my recipe',
          to: '/create-recipe'
        },
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollLength = document.documentElement.scrollTop;
    if (scrollLength > 0) {
      this.setState({
        scroll: true
      })
    }
    else {
      this.setState({
        scroll: false
      })
    }
  }

  handleMenuIcon = () => {
    this.setState({
      click : !this.state.click
    })
  }

  closeMenu = () => {
    this.setState({
      click: false
    });
  }
  
  hideNav = (hide) => {
    this.setState(prevState => {
      prevState.menu[0] = { ...prevState.menu[0], hide: hide };
      console.log(prevState.menu[0]);
    });
  }

  render() {
    const { click, menu, scroll } = this.state;

    return (
      <>
        <nav className={scroll ? 'navbar scroll' : 'navbar'}>
          <div className="navbar-container">
            <Link to='/' className='navbar-logo' onClick={() => this.closeMenu()}>
              <img src={logo} alt="Logo"/>
            </Link>
            <div className="menu-icon" onClick={() => this.handleMenuIcon()}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
              {menu.map((val, index) => {
                return (
                  <li key={index} className={val.hide ? 'nav-item nav-hide' : 'nav-item'}>
                    <NavLink exact to={val.to} className='nav-links' onClick={()=>this.closeMenu()}>
                      {val.name}
                    </NavLink>
                  </li>           
                )
              })}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
