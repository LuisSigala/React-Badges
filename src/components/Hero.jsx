import React from 'react' 
import { Link } from 'react-router-dom'
import "./style/Hero.css"

const Hero = props => {
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                  <Link to="/">
                    <img src={"https://assets.spartangeek.com/cc/setups-gamers-baratos.jpg?mtime=20210531205017&focal=none"} alt="" />
                  </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;