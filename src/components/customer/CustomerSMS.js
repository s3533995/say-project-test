import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import FilteredCustomerList from './FilteredCustomerList'



class CustomerSMS extends Component {
    state ={
        search:null
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            search:e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    // }


    render() {
        
        const { customers } = this.props;
        
        return(
            <div className="customerSMS container">
                
                    <p>search bar here</p>
                    <input type="text" id="search-string" onChange={this.handleChange}></input>
                    
                    
                <FilteredCustomerList customers={customers} search={this.state.search}/>
                <p>send message box here</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
        customers:state.firestore.ordered.customers
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'customers'}
    ])
)(CustomerSMS)