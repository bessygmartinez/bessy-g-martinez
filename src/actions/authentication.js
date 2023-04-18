import axios from 'axios';
import { GET_ERRORS, RESET_STATE } from './types';
import M from "materialize-css";

export const sendMessage = (data) => dispatch => {
    axios.post('/api/form', data)
            .then(res => {
                M.toast({
                    html: "Message Sent!",
                    classes: "rounded",
                    displayLength: 3000
                })
                dispatch({
                    type: RESET_STATE
                })
                console.log("success!")
                document.getElementById("contact-form").reset();
                })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                console.log("error");
            });
}