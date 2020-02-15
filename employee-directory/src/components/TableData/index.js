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
                                <th scope="row"></th>
                                {/* <td>{employee.image}</td> */}

                                <td>
                                    <img
                                        src={employee.picture.medium}
                                        alt='employee'
                                    />
                                </td>

                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.date}</td>
                            </tr>




                        ))}


                    </tbody>
                </table>
            </div >


        )
    }
}

