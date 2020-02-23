import React from 'react';

// import SortByName from '../SortByName';

export default class TableHeader extends React.Component {


    // function SortByName() {
    //     function handleClick(e) {
    //         e.preventDefault();
    //         console.log('The link was clicked!');
    //     }
    // }


    // Manipulate state on App component, in my case, it would be Table Area. 
    // Event handler goes here

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Image</th>


                            <th scope="col"

                                onClick={this.props.SortByName}
                            >
                                Name

                             </th>

                            {/* <th scope="col">Name</th> */}
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>

                </table>
            </div>
        )
    }
}