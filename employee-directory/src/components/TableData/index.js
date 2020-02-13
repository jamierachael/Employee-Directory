import React, { useReducer } from 'react';
// What goes here?

export default class TableData extends React.Component {
    render() {
        return (
            <div>
                {/* TableData */}
                <table class="table">
                    <tbody>
                        {/* {user.map((user) => {


                            <tr>
                                <th scope="row">1</th>
                                <td image={user.image}></td>
                                <td name={user.name}></td>
                                <td phone={user.phone}></td>
                                <td email={user.email}></td>
                                <td DOB={user.DOB}></td>
                            </tr>

                        })} */}

                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        )
    }
}