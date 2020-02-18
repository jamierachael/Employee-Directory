import React from 'react';

// import SortByName from '../SortByName';

export default class TableHeader extends React.Component {

    // handleNameChange = (name) => {
    //     this.setState({ sortByName: name });
    // }

    // Handle Click
    // access name column, sort, re-render

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Image</th>
                            {/* <th><a href="#" onclick="">
  Name
</a></th> */}
                            {/* <SortByName /> */}
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                       On TableData Component
                    </tbody> */}
                </table>
            </div>
        )
    }
}