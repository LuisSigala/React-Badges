import React from "react"
import SkeletonItem from "../../components/SkeletonItem"
import BadgesList from "../../components/BadgeList"
import Footer from "../../components/Footer"
import Button from "../../components/MainButton"
import api from "../../libs/fetch"
import "./Badges.css"

class Badges extends React.Component{

    state={
        loading: true,
        error: null,
        data: undefined,
        handle_footer: {bottom: 0},
    }
    
    componentDidMount(){
        this.fetchData();
        this.setFetchInterval();
    }


    fetchData = async() => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.list();
            data.reverse();
            this.setState({loading: false, data: data})

            if(data.length > 3){
                this.setState({handle_footer:{position: "relative"}})
            }else{
                this.setState({handle_footer:{bottom: 0}})
            }

        } catch (error) {
            this.setState({loading: false, error: error, data: []})
        }
    }

    setFetchInterval(){
        this.interval = setInterval(this.fetchData, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }


    render(){
        if(this.state.loading==true && !this.state.data){
            return <SkeletonItem></SkeletonItem>
        }

        return(
            <React.Fragment>
                <div className="Badges__container">
                    <div className="Badges__button">
                        <Button
                        theme={"Button-light"}
                        contentText = {"New Badge"}
                        link={"/new"}
                        >

                        </Button>
                    </div>
                </div>
                <BadgesList badges={this.state.data}></BadgesList>
                <Footer s={this.state.handle_footer}></Footer>
            </React.Fragment>
        )
    }
}

export default Badges;