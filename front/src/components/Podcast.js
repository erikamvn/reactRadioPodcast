import React, { Component } from 'react'

export default class 
 extends Component {
    render() {
        const {podCast} = this.props;

        if(!podCast){
            return  (<p>Podcast não encontrado</p>);
        }

        const {img, title, description} = podCast;
        const {imageStyle} = styles;
        return (
            <div className='center'>
                <img style={imageStyle} src={`./img/${img}`} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

const styles = {
    imageStyle: {
        width: '300px',
        height: '300px',
    },
}
