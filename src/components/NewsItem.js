// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let { title, description, imgUrl, newsUrl, author, publishedAt,source } = this.props
//         return (
//             <div className="my-2">
//                 <div className="card" >
//                     <img src={!imgUrl ? "https://s.yimg.com/ny/api/res/1.2/AOToTq8nPyqmzQ.8PEQKpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTU-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/684a5510-23fe-11ec-9efe-818194d8ddcc" : imgUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"80%",zIndex:"1"}}>{source}
//                         </span>
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
//                         <a href={newsUrl} className="btn btn-sm btn-primary">Read More...</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem

import React from 'react'

export default function NewsItem(props) {
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } = props
    return (
        <div className="my-2">
            <div className="card" >
                <img src={!imgUrl ? "https://s.yimg.com/ny/api/res/1.2/AOToTq8nPyqmzQ.8PEQKpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTU-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/684a5510-23fe-11ec-9efe-818194d8ddcc" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: "1" }}>{source}
                    </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More...</a>
                </div>
            </div>
        </div>
    )
}

