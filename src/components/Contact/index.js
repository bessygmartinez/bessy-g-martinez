import React, { Component } from "react";
// import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./contact.css";
import classnames from 'classnames';
// import axios from "axios";

import { sendMessage } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Contact extends Component {
    constructor() {
        super()

        this.state = {
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        // const { name, email, message } = this.state

        // await axios.post("/api/form", {
        //     name, 
        //     email, 
        //     message
        // }).then((res => {
        //     M.toast({
        //         html: "Message Sent!",
        //         classes: "rounded",
        //         displayLength: 3000
        //     })

            this.props.sendMessage(data)


            // this.setState({
            //     name: '',
            //     email: '',
            //     message: ''
            // });

            // document.getElementById("contact-form").reset();

            // console.log("success!");

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }

        let keys = Object.keys(nextProps.errors);

        if(keys.length === 0) {
            this.setState({
                name: nextProps.name,
                email: nextProps.email,
                message: nextProps.message,
                errors: nextProps.errors
            })
        }
    }

render()

 {
    const { errors } = this.state;
    
  return (
      <div>
          <div className="row contact-div">
              <form 
              className="col s12 m12 l12"
              onSubmit={this.handleSubmit}
              id="contact-form">
                  <h3>Send a Message</h3>
                  <div className="row">
                      <div className="input-field col s6 m6 l6">
                          <input 
                          id="name"
                          name="name"
                          type="text"
                          className={classnames('', {
                            'invalid': errors.name
                        })}
                          onChange={this.handleChange} />
                          {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                          <label htmlFor="name">Name</label>
                      </div>
                      <div className="input-field col s6 m6 l6">
                          <input
                          id="email"
                          name="email"
                          type="email"
                          className={classnames('', {
                            'invalid': errors.email
                        })}
                          onChange={this.handleChange} />
                          {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                          <label htmlFor="email">Email</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                      <textarea
                      id="message"
                      name="message"
                      className={classnames('materialize-textarea', {
                        'invalid': errors.message
                    })}
                      onChange={this.handleChange} />
                      {errors.message && (<div className="invalid-feedback-textarea">{errors.message}</div>)}
                        <label htmlFor="message">Your Message</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                      <button className="btn btn-flat btn-orange waves-effect waves-yellow"
                      type="submit"
                      name="action"
                      >Submit
                    <i className="material-icons right">send</i>
                    </button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  );
 }
}

Contact.propTypes = {
    sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    name: "",
    email: "",
    message: "",
    errors: state.errors
});

export default connect(mapStateToProps,{ sendMessage })(withRouter(Contact))