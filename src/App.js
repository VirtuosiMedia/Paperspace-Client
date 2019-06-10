import React from 'react';
import './css/App.css';

import Navigation from './javascript/components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container-fluid">
        <div className="card mt-4">
          <div className="card-header">Development Notes</div>
          <div className="card-body">
            <p className="card-text">Given that the scope this project is a coding challenge, there are a number of instances of items that would be done differently in a production environment. I've added comments in the code for some of them, but will also list them below.</p>
            <h5 className="card-title">Security Considerations</h5>
            <ul>
              <li>Authentication would be added in a real-world setting for the API. While it might not be strictly necessary for release notes, it would be for almost everything else.</li>
              <li>Additional work would be done to ensure that the markdown file is valid and secure if it is obtained from a third-party source.</li>
            </ul>
            <h5 className="card-title">Architectural and Development Considerations</h5>
            <ul>
              <li>The API is light. This could be expanded in a number of ways to support CRUD functionality, different views, and services.</li>
              <li>The organization of the client app might become more complex with additional requirements.</li>
              <li>More tools in the build process would be added in a production setting like: a CSS preprocessor, project linting rules, a test suite, etc.</li>
              <li>No state management library was used here, but this would probably become a necessity for a production application.</li>
            </ul>
            <h5 className="card-title">UI/UX Considerations</h5>
            <ul>
              <li>The release notes widget could be iterated upon to offer expanded markdown support.</li>
              <li>Bootstrap was used for this project for the sake of time, but other frameworks might be better suited depending on requirements.</li>
              <li>The form factor of the widget is not ideal from a UX perspective. Release notes are often longer form content and trying to fit them into a popover would not be a recommendation I would make. As alternatives, I would suggest simply a link to a blog or a larger modal. Many applications use an interstitial for this purpose.</li>
            </ul>
            <p className="card-text">Below is the markdown file used for this project.</p>
            <a href="https://gist.github.com/VirtuosiMedia/35ac0ff67ee2756c2a72fcb9d9c1b380" rel="noopener noreferrer" target="_blank" className="btn btn-primary">Release Notes Markdown File</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
