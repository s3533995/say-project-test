import React, { Component } from "react";
import { connect } from "react-redux";
import { createCustomerReview } from "../../store/actions/createReviewAction";
import Camera from "react-html5-camera-photo";

class CustomerReview extends Component {
  state = {
    fullname: "",
    email: this.props.auth.email,
    phonenumber: "",
    pictureUri: null
  };

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    // console.log();
    this.setState({
      ...this.state,
      pictureUri: dataUri
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCustomerReview(this.state);
    // this.props.history.push('/');
  };

  render() {
      console.log(this.props);
    const picture = this.state.pictureUri ? (
      <div>
        <img alt="img" src={this.state.pictureUri} />
      </div>
    ) : null;
    return (
        
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Create New Review</h5>
          <div>
            <label htmlFor="fullname">Fullname:</label>
            <input type="text" id="fullname" onChange={this.handleChange} />
          </div>
          {/* <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div> */}
          <div>
            <label htmlFor="phonenumber">Phone number:</label>
            <input type="text" id="phonenumber" onChange={this.handleChange} />
          </div>
          <div>
            <Camera
              onTakePhoto={dataUri => {
                this.onTakePhoto(dataUri);
              }}
            />
          </div>
          <div>{picture}</div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = dispatch => {
  return {
    createCustomerReview: review => dispatch(createCustomerReview(review))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CustomerReview)
