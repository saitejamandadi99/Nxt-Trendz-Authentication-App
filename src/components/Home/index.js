// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="detailsContainer">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image1"
          />
          <p className="para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the new seasons new and
            exciting in your own way.
          </p>
          <button className="Shopbutton">Shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image2"
        />
      </div>
    </>
  )
}

export default Home
