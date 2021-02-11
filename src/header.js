import React from 'react';


export default class PageHeader extends React.Component {
    render() {
        return (
            <header className="page-header">
               <p className="greeting"> Welcome to the Creature Gallery!</p>
               <p className="instructions"> Select a keyword and/or number of horns in the dropboxes below to filter creatures!</p> 
            </header>
        );
    }
}