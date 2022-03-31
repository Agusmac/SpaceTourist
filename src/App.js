import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technologies from './components/Technologies/Technologies'
import Error from './components/Error'

const App = () => {

    const [backImg, setBackImg] = useState("home")
    return (
        <div className={`background ${backImg}`}>
            <Router>
                <Navbar backImg={backImg} />
                <Switch>
                    <Route exact path="/">
                        <Home setBackImg={setBackImg} />
                    </Route>
                    <Route path="/destination">
                        <Destination setBackImg={setBackImg} />
                    </Route>
                    <Route path="/crew">
                        <Crew setBackImg={setBackImg} />
                    </Route>
                    <Route path="/technologies">
                        <Technologies setBackImg={setBackImg} />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App