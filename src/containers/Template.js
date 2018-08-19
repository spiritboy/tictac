import React from 'react'
import {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import injectTapEvent from 'react-tap-event-plugin'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});
injectTapEvent()

class Template extends  Component{
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <div>
                    <header>
                        <h1>Tic Tac Turing</h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Template;