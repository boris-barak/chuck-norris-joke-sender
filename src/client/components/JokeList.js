import React from 'react';
import {ListGroup, ListGroupItem } from "reactstrap";

class JokeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedJokeId: props.selectedJokeId
        };

        this.handleSelectedJokeChange = this.handleSelectedJokeChange.bind(this);
    }

    handleSelectedJokeChange(event) {
        this.props.handleSelectedJokeChange(event);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedJokeId !== this.state.selectedJokeId) {
            this.setState({
                selectedJokeId: nextProps.selectedJokeId
            });
        }
    }

    render() {
        let listItems = this.props.jokes.map((jokeText, index) =>
            <ListGroupItem key={index} action active={index == this.state.selectedJokeId} value={index} onClick={this.handleSelectedJokeChange}>
                {/*<input type="radio" id={'joke-' + index} name="joke" value={index} />*/}
                {/*<label htmlFor={'joke-' + index}></label>*/}
                {jokeText}
            </ListGroupItem>
        );

        return (
            <>
                <h2>List of jokes</h2>
                <ListGroup>
                    {listItems}
                </ListGroup>
            </>
        );
    }
}

// const JokeList = ({jokes, selectedJokeId, handleSelectedJokeChange}) => {
//     let listItems = jokes.map((jokeText, index) =>
//         <ListGroupItem key={index} action active={index === selectedJokeId}>
//             <input type="radio" id={'joke-' + index} name="joke" value={index} onClick={handleSelectedJokeChange} />
//             <label htmlFor={'joke-' + index}>{jokeText}</label>
//         </ListGroupItem>
//     );
//
//     return (
//         <>
//             <h2>Choose a joke</h2>
//             <ListGroup>
//                 {listItems}
//             </ListGroup>
//         </>
//     );
// };

export default JokeList;