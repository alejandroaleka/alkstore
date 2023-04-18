import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import NavbarListContainer from '../NavbarListContainer/NavbarListContainer'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand brand-title">ALK STORE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/category/1`}> <NavbarListContainer greeting = "Componentes" /> </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/2`}> <NavbarListContainer greeting = "Equipos" /> </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/3`}><NavbarListContainer greeting = "Laptops" /> </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/4`}> <NavbarListContainer greeting = "Monitores" /> </NavLink>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
            </div>
        </div>
      </nav>
    )
}

export default NavBar