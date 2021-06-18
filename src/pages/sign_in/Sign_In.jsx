import React from "react" 
import {Link} from "react-router-dom"
import Button from "../../components/MainButton";
import "./Sign_In.css"

class Sign_In extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>            
                <div className="container look col-7">
                    <div className="form fom">
                        <div className="form-row fill">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small id="emailHelp" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                                <div className="col-3 buttons">
                                    <Button contentText={"Submit"} theme={"Button"}></Button>
                                    <Button contentText={"Badges"} theme={"Button"} link={"/Badges"}></Button>
                                    <Button contentText={"Sign_up"} theme={"Button"} link={"/login"}></Button>
                                </div>
                        </div>
                    </div>
                </div>
                </center> 
            </React.Fragment>
        );
    }
}

export default Sign_In;