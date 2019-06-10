import React from 'react';
import { Badge, Button, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import ReleaseNotes from './ReleaseNotes';

class Navigation extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.getReleaseNotes();
    }

    getReleaseNotes() {
        fetch('http://localhost:9000/release-notes')
            .then(res => res.json())
            .then(res => this.setState({ notes: res.notes }))
            .catch(err => err);
    }

    getNotesBadge() {
        const numNotes = this.state.notes.length;
        // This is where the fetched release notes could be compared with a user cookie to display the appropriate number of notes in the badge.
        return numNotes > 0 ? <Badge variant="info">{numNotes}</Badge> : null;
    }

    render() {
        const notesBadge = this.getNotesBadge();

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Paperspace</Navbar.Brand>
                <Nav>
                    <OverlayTrigger
                        trigger="click" placement="bottom" overlay={<Popover id="release-notes"><ReleaseNotes notes={this.state.notes}></ReleaseNotes></Popover>}>
                        <Button variant="dark">Release Notes {notesBadge}</Button>
                    </OverlayTrigger>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;