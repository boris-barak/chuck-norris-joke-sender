import React from 'react';
import './App.css';

import JokeList from './components/JokeList';
import EmailCreating from "./components/EmailCreating";
import EmailList from "./components/EmailList";
import sortByDomainAndName from "./helpers/sortByDomainAndName";
import {Jumbotron, Container, Row, Col, Toast, ToastHeader, ToastBody, Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import callSendJoke from "./api/callSendJoke";
import isEmailValid from "../common/validation/isEmailValid";
import AlertList from "./components/AlertList";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedJokeId: null,
            emails: [],
            errors: [],
            messages: [],
            isSending: false
        };

        this.handleSelectedJokeChange = this.handleSelectedJokeChange.bind(this);
        this.handleEmailAdd = this.handleEmailAdd.bind(this);
        this.handleEmailRemove = this.handleEmailRemove.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleSelectedJokeChange(event) {
        this.setState({
            selectedJokeId: event.target.value,
        });
    }

    handleEmailAdd(event) {
        event.preventDefault();

        let newEmail = event.target.email.value;
        let emails = this.state.emails;
        let errors = [];

        if (emails.indexOf(newEmail) !== -1) {
            errors.push('This email is already in the list.');
        }

        if (!isEmailValid(newEmail)) {
            errors.push('This email is not valid.');
        }

        if (errors.length === 0) {
            emails.push(newEmail);
            emails.sort(sortByDomainAndName);

            event.target.email.value = '';
        }

        this.setState({
            emails,
            errors
        });
    }

    handleEmailRemove(event) {
        let removedEmail = event.target.value;
        let emails = this.state.emails;

        let index = emails.indexOf(removedEmail);
        if (index !== -1) {
            emails.splice(index, 1);

            this.setState({
               emails
            });
        }
    }

    handleSend() {
        let that = this;

        let data = {
            selectedJokeId: this.state.selectedJokeId,
            emails: this.state.emails
        };

        let newState = {
            isSending: false
        };

        callSendJoke(data, (result) => {
            if (!result.error) {
                newState.messages = [result.message];
                newState.errors = [];
                newState.emails = [];
                newState.selectedJokeId = null;
            } else {
                newState.errors = [`Email couldn't be sent: ${result.message}`];
            }

            that.setState(newState);
        }, (error) => {
            newState.errors = [`Server error: Email couldn't be sent.`];
            that.setState(newState);
        });

        this.setState({
            isSending: true
        });
    }

    render () {
        let selectedJokeElement = (this.state.selectedJokeId !== null)
            ? this.props.jokes[this.state.selectedJokeId]
            : <small>No joke has been selected. Please, select one from the list below.</small>;

        let buttonDisabled = this.state.selectedJokeId === null || this.state.emails.length === 0 || this.state.isSending;
        let sendButtonText = this.state.isSending? 'Sending...' :'Send';

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Chuck Norris joke sender</h1>
                    </Col>
                </Row>
                <Jumbotron>
                    <AlertList messages={this.state.errors} color="danger" />
                    <AlertList messages={this.state.messages} color="success" />
                    <Row>
                        <Col>
                            <EmailList emails={this.state.emails} handleEmailRemove={this.handleEmailRemove}/>
                            <EmailCreating handleEmailAdd={this.handleEmailAdd}/>
                        </Col>
                        <Col>
                            <Toast>
                                <ToastHeader>Selected joke</ToastHeader>
                                <ToastBody>{selectedJokeElement}</ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{float: 'right'}} color="primary" size="lg" disabled={buttonDisabled}
                                    onClick={this.handleSend}>{sendButtonText}</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row>
                    <Col>
                        <JokeList jokes={this.props.jokes} selectedJokeId={this.state.selectedJokeId}
                                  handleSelectedJokeChange={this.handleSelectedJokeChange}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
