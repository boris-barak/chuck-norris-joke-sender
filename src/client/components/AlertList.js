import React from "react";
import {Alert} from "reactstrap";

const AlertList = ({messages, color}) => {
    let alertElements = [];
    messages.forEach((message) => {
        alertElements.push(
            <Alert color={color} key={message}>{message}</Alert>
        );
    });

    return alertElements;
};

export default AlertList;