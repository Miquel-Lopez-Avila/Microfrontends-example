import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const Application = () => {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path={'/pricing'} component={Pricing} />
                        <Route exact path={'/'} component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

export default Application