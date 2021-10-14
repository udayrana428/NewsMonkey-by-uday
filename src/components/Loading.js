import React, { Component } from 'react'
import loading from './loading.gif'
export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="" />
            </div>
        )
    }
}

export default Loading
