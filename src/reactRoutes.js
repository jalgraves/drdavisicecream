import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { MainInfo, AboutInfo, ContactInfo } from './components/content/main'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainInfo />
                </Route>
                <Route path="/about">
                    <AboutInfo />
                </Route>
                <Route path="/contact">
                    <ContactInfo />
                </Route>
            </Switch>
        </Router>
    )
}
