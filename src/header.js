import React from 'react';
export default class PageHeader extends React.Component {
    render() {
        return (
            <header className="page-header">
                <form>
                Keyword:
                    <select>
                        <option value = "narwhal">Narwhal</option>
                        <option value = "rhino">Rhino</option>
                        <option value = "unicorn">Unicorn</option>
                        <option value = "unilego">Unilego</option>
                        <option value = "triceratops">Triceratops</option>
                        <option value = "markhor">Markhor</option>
                        <option value = "mouflon">Mouflon</option>
                        <option value = "chameleon">Chameleon</option>
                        <option value = "lizard">Lizard</option>
                        <option value = "dragon">Dragon</option>
                    </select>
                    <button>Filter</button>
                </form>
            </header>
        );
    }
}