import React from 'react';
import { Badge } from 'react-bootstrap';

class Navigation extends React.Component {

    state = {
        currentNote: null,
        status: 'release-notes-list'
    }

    listItemClickHandler = note => {
        this.setState({
            currentNote: note,
            status: 'release-notes-note'
        });
    }

    noteContentClickHandler = () => {
        this.setState({
            currentNote: null,
            status: 'release-notes-list'
        });
    }

    renderListItem = note => {
        const variant = note.type === 'New' ? 'success' : 'danger';
        const noteContent = note.content.join('').substring(0, 80) + '...'; //Truncate

        return <div onClick={() => this.listItemClickHandler(note)} key={note.date} className="release-notes-list-item">
            <Badge variant={variant}>{note.type}</Badge>
            <strong> {note.title}</strong>
            <span className="text-black-50"> {noteContent}</span>
        </div>
    }

    renderNoteContent = () => {
        const note = this.state.currentNote;
        const variant = note.type === 'New' ? 'success' : 'danger';
        const noteContent = note.content.map((content, index) => <p key={`note-paragaph${index}`}>{content}</p>);

        return <div className="release-notes-section">
            <h6 id="release-notes-content-title" className="release-notes-title" onClick={this.noteContentClickHandler}>&#8249; {note.title}</h6>
            <div id="release-notes-content">
                <p><Badge variant={variant}>{note.type}</Badge> <em className="text-black-50">{note.date}</em></p>
                {noteContent}
            </div>
        </div>
    }

    render() {
        const listItems = this.props.notes.map(note => this.renderListItem(note));
        const noteContent = this.state.currentNote ? this.renderNoteContent() : <div className="release-notes-section" />;

        return (
            <div>
                <div id="release-notes-container" className={this.state.status}>
                    <div className="release-notes-section">
                        <h6 className="release-notes-title">Latest Changes</h6>
                        {listItems}
                    </div>
                    {noteContent}
                </div>
            </div>
        );
    }
}

export default Navigation;