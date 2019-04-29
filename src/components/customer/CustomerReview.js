import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCustomerReview } from '../../store/actions/createReviewAction'


class CustomerReview extends Component {
    state = {
        fullname: '',
        email: '',
        phonenumber: ''
    }

    handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof(this.state));
    this.props.createCustomerReview(this.state);
    // this.props.history.push('/');
  }

  render(){
      return(
          <div className="container">
              <form onSubmit={this.handleSubmit}>
                <h5>Create New Review</h5>
                <div>
                    <label htmlFor="fullname">Fullname:</label>
                    <input type="text" id='fullname' onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='email' onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="phonenumber">Phone number:</label>
                    <input type="text" id='phonenumber' onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
              </form>
          </div>
      )
  }

}
    const mapDispatchToProps = dispatch => {
        return {
            createCustomerReview: (review) => dispatch(createCustomerReview(review))
        }
    }

export default connect(null, mapDispatchToProps)(CustomerReview)