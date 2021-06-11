import React from "react"
import Badge from "./Badge"
import Hero from "./Hero"
import Footer from "./Footer"

const BadgeDetailsUi = props =>{
    const badge = props.badge

    return(
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <Badge
                        header_img_url = {badge.header_img_url}
                        profile_picture_url = {badge.profile_picture_url}
                        name = {badge.name}
                        age = {badge.age}
                        city = {badge.city}
                        followers = {badge.followers}
                        likes = {badge.likes}
                        post = {badge.post}
                        ></Badge>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default BadgeDetailsUi;