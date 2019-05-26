import React from 'react';
import { InputGroup, Input, Button } from "reactstrap";

const EmailCreating = ({handleEmailAdd}) =>
    <form onSubmit={handleEmailAdd}>
        <InputGroup>
            <Input type="email" name="email" defaultValue=""  />
            <Button type="submit" size="sm">Add email</Button>
        </InputGroup>
    </form>
;

export default EmailCreating;