// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <div>
      <div className="appContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websitelogo"
          />
        </div>
        <ul className="linksContainer">
          <li>
            <Link className="linkItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="linkItem" to="/product">
              Products
            </Link>
          </li>
          <li>
            <Link className="linkItem" to="/cart">
              Cart
            </Link>
          </li>
          <button type="button" className="button">
            Logout
          </button>
        </ul>
      </div>

      <div className="appContainerESM">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websitelogo"
          />

          <button type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="navImg"
            />
          </button>
        </div>
        <ul className="linksContainer">
          <li>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt=" nav home"
                className="navImg"
              />
            </Link>
          </li>
          <li>
            <Link to="/product">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt=" nav products"
                className="navImg"
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt=" nav cart"
                className="navImg"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
