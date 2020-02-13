import React from 'react';


// export default class TableArea extends React.Component {
//     render() {
//         return (
//             <div className="wrapper">


//             </div>
//         )
//     }
// }

export default function TableArea(props) {
    // render()
    return (
        <div className="wrapper">

            {props.children}

        </div>
    )

}