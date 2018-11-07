import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{id}'s Christmas Wishes List: </span>
                <p>
                    <li>Pregnant Belly Serum</li>
                    <li>My husband will always be happy and positive.</li>
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Tien Borland</div>
                <div> November 7th, 2018, 4:34pm</div>
            </div>
        </div>
    </div>
  )
}
