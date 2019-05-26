import React from 'react';
import {ListGroup, ListGroupItem, Button } from "reactstrap";

const EmailList = ({emails, handleEmailRemove}) => {
    if (emails.length === 0) {
        return (
            <div>- no emails entered -</div>
        );
    }

    let listItems = emails.map((email) =>
        <ListGroupItem key={email}>{email} <Button style={{float: 'right'}} color="danger" size="sm" onClick={handleEmailRemove} value={email}>Remove</Button></ListGroupItem>
    );

    return (
        <>
            <h2>Emails</h2>
            <ListGroup>
                {listItems}
            </ListGroup>
        </>
    );
};

export default EmailList;