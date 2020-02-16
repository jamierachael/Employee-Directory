import React from 'react';

export default class TableHeader extends React.Component {

    // handleNameChange = (name) => {
    //     this.setState({ sortByName: name });
    // }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Image</th>
                            {/* <th><a href="#" onclick="console.log('The link was clicked.'); return false">
  Name
</a></th> */}
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