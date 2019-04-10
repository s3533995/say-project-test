import React from 'react';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';


const SignedInLinks = (props) => {
    
    return (
        <ul>            
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);