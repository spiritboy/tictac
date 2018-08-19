import React from 'react'
import {Component} from 'react'
import {Button} from '@material-ui/core'


class Profile extends Component {
    render() {
        return (
            <div>
                <p>I am the Profile! wooow</p>
                <Button onFocus={()=>{alert(1)}} onClick={()=>{alert('i am clicjed!')}} variant="contained">Click Me Bro!</Button>
            </div>

        );
    }
}

export default Profile;