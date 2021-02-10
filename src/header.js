import React from 'react';


export default class PageHeader extends React.Component {
    handleFilterChange = (e) => {
        e.preventDefault();
        this.setState({keyword: e.target.value})}
        handleSubmit = (e) => {
            e.preventDefault();
            this.setState({keyword: e.target.value});}
    render() {
        return (
            <header className="page-header">
            </header>
        );
    }
}