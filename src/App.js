import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"
import Sign_In from "./pages/sign_in/Sign_In"
import Login from "./pages/login/Login"
import Not_Found from "./pages/not_found/Not_Found"
import NewBadge from "./pages/NewBadge/NewBadge"
import Badges from "./pages/Badges/Badges"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/Sign_in" component={Sign_In}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Badges" component={Badges}></Route>
          <Route component={Not_Found}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
