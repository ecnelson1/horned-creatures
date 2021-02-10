import React from 'react'



export default class ImageList extends React.Component {
    render() {
            const filtered = this.props.filteredImages
            return (
                <>      
                    <ul>
                    {
                        filtered.map(image => 
                        <li key={image.title} className='animal'>
                            <img alt={image.description} src={image.url} />
                            <p>{image.title}</p>
                            <p>{image.keyword}</p>
                        </li>
                        )
                    }
                    </ul>
                
                </>
            )
            }
        }
        