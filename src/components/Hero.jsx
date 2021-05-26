import React from 'react' 
import { Link } from 'react-router-dom'
import HeroImage from "../images/hero_image.jpg"
import "./style/Hero.css"

const Hero = props => {
    return(
        <React.Fragment>
            <div className="Hero">
                <div classNmae="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                  <Link to="/">
                    <img src={HeroImage} alt="" />
                  </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;