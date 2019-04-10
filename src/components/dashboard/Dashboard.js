import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

class Dashboard extends Component  {
    render(){
        // console.log(this.props)
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div>
                <p>This is a content part.</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        
        auth:state.firebase.auth
    }
}

export default 
    connect(mapStateToProps)(Dashboard);