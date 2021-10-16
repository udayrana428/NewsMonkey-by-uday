// import React, { Component } from 'react'
import loading from './loading.gif'
// export class Loading extends Component {
//     render() {
//         return (
//             <div className="text-center">
//                 <img src={loading} alt="" />
//             </div>
//         )
//     }
// }

// export default Loading
import React from 'react'

export default function Loading() {
    return (
        <div className="text-center">
            <img src={loading} style={{height:"60px"}} alt="" />
        </div>
    )
}
