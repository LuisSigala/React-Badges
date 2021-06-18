import React, {Component} from "react"
import './style/BadgeForm.css'

class BadgeForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm">
                    <div >
                    <form onSubmit={this.props.onSubmit} className="ree">
                        <div className="form-group mb-2">
                            <label className="mb-2">
                                Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              onChange={this.props.onChange}
                              value={this.props.formValues.name}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Profile Picture URL
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="profile_picture_url"
                              onChange={this.props.onChange}
                              value={this.props.formValues.profile_picture_url}
                            />
                            <div className="form-group col mb-2">
                            <label className="mb-1">
                                header_picture
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="header_img_url"
                              onChange={this.props.onChange}
                              value={this.props.formValues.header_img_url}
                            />
                            </div>
                            <div className="form-group mb-2">
                            <label className="mb-1">
                                Age
                            </label>
                            <br/>
                            <input
                              type="text"
                              className="form.control"
                              name="age"
                              onChange={this.props.onChange}
                              value={this.props.formValues.age}
                            />
                            </div>
                            <div className="form-group mb-2">
                                <label className="mb-2">
                                    City
                                </label>
                                <br/>
                                <input
                                type="text"
                                className="form.control"
                                name="city"
                                onChange={this.props.onChange}
                                value={this.props.formValues.city}
                                />
                                <button type="submit" className="Submit__button">Save</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;