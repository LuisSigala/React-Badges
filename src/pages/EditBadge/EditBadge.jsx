import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import Footer from "../../components/Footer"
import PageError from "../../components/PageError"
import Loader from "../../components/Loader"
import "../NewBadge/NewBadge.css"
import api from "../../libs/fetch"


class EditBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_img_url: "",
            profile_picture_url: "",
            name: "",
            age: "",
            city: "",
            followers: "",
            likes: "",
            post: "",
        },
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error: null})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    handleChange = event => {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, error:null})

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loadign:false, error:null})
            this.props.history.push("/badges")
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render(){

        if(this.state.loading){
            return <Loader></Loader>;
        }

        if(this.state.error){
            return <PageError error={this.state.error.message}></PageError>
        }

        return(
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container mt-5">
                    <div className="row">
                        <Badge
                            header_img_url = {this.state.form.header_img_url || "https://images.freeimages.com/images/small-previews/89a/one-tree-hill-1360813.jpg"}
                            profile_picture_url = {this.state.form.profile_picture_url || "https://www.gravatar.com/avatar/205e460b479e8e5b48aec07710c08d50"}
                            name = {this.state.form.name || "Name LastName"}
                            age = {this.state.form.age || "XX"}
                            city = {this.state.form.city || "State Country"}
                            followers = {this.state.form.followers || "0"}
                            likes = {this.state.form.likes || "0"}
                            post = {this.state.form.post || "0"}
                        ></Badge>
                    </div>
                    </div>
                    <div className="col">
                    <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}>
                        </BadgeForm>
                    </div>
                </div>
                <Footer s={{bottom: 0}}></Footer>
            </React.Fragment>
        );
    }
}

export default EditBadge;