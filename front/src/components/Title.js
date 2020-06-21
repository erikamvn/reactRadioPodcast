import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className='center'>
               <h1>{children}</h1>
            </div>
        )
    }
}
