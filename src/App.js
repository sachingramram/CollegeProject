 import React from "react";
 import {BrowserRouter as Router, Route} from "react-router-dom";
import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
 const App =() =>{
    return ( <Router>
             <Route path ="/">
                <Users />
             </Route>
             <Route path="/locations/new">
              <NewLocation/>
             </Route>
             
    </Router>
    );
 };

 export default App;