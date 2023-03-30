import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand brand-title" href="#">ALK STORE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <ItemListContainer greeting = "Home" />
              </li>
              <li className="nav-item">
                <ItemListContainer greeting = "Novedades" />
              </li>
              <li className="nav-item">
                <ItemListContainer greeting = "Productos" />
              </li>
              <li className="nav-item">
                <ItemListContainer greeting = "Ofertas" />
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