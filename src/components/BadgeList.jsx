import React from "react"
import "./style/BadgeList.css"

class BagesListItem extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeListItem mt-5">
                    <div className="col-5">
                        <div className="Item__profilePicture">
                            <img src={this.props.badge.profile_picture_url} alt="Profile_picture" />
                        </div>
                        <div className="Item__background">
                            <img src={this.props.badge.header__img_url} alt="profile_picture" />
                        </div>
                    </div>
                    <div className="col-7 my-5">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.badge.name} <i>{this.props.badge.age}</i>
                            </h4>
                            <p className="text-center">{this.props.badge.city}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class BadgesList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <p>List</p>
            </React.Fragment>
        )
    }
}

export default BadgesList;