import React, { useReducer } from 'react';
// What goes here?

// Employess should load on page load
// Search should filter through list of existing employees

export default class TableData extends React.Component {






    render() {
        return (
            <div>
                {/* TableData */}
                <table className="table">
                    <tbody>
                        {this.props.employees.map((employee) => (


                            //  dob.date object

                            < tr >
                                <th scope="row">1</th>
                                <td>{employee.image}</td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.DOB}</td>
                            </tr>




                        ))}

                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
            </div >


        )
    }
}

