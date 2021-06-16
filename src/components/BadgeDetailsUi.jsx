import React from "react"
import { Link } from "react-router-dom"
import Badge from "./Badge"
import Hero from "./Hero"
import Footer from "./Footer"
import DeleteBadgeModal from "./DeleteBadgeModal"

const BadgeDetailsUi = (props) => {
    const badge = props.badge;

    return (
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-5">
                        <Badge
                            header_img_url={badge.header_img_url}
                            profile_picture_url={badge.profile_picture_url}
                            name={badge.name}
                            age={badge.age}
                            city={badge.city}
                            followers={badge.followers || 0}
                            likes={badge.likes || 0}
                            post={badge.post || 0}
                        ></Badge>
                    </div>
                    <div className="col-2 mt-5">
                        <h2 className="mt-5">Actions</h2>
                        <Link className="btn btn-success mx-3" to={'/${badge._id}/edit/'}>Edit</Link>
                        <button onClick={props.onOpenModal} className="btn btn-danger mx-3">Delete</button>
                        <DeleteBadgeModal
                            isOpen = {props.modalIsOpen}
                            onClose = {props.onCloseModal}
                            onDeleteBadge = {props.onDeleteBadge}
                        ></DeleteBadgeModal>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default BadgeDetailsUi;