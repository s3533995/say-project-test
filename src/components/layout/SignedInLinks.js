import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';


const SignedInLinks = (props) => {
    
    return (
        <ul>            
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/customer-review'>New Review</NavLink></li>
            <li><NavLink to='/customer-sms'>SMS</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);