import React, { useReducer } from 'react';
// What goes here?

// Employess should load on page load
// Search should filter through list of existing employees

export default class TableData extends React.Component {






    render() {
        return (
            <div>

                <table className="table">


                    <tbody>

                        {/* example w3schools */}
                        {/* array.filter(function(currentValue, index, arr), thisValue) */}

                        {/* example stackoverflow */}

                        {/* {this.props.list.friend.filter(function (friend) {
                            return <li>{friend[0] === 'true'}</li>
                        })} */}

                        {/* tried example, does not work */}
                        {/* 
                        {this.props.employees.name.filter(function (name) {

                        {/* })}  */}

                        {/* Works, need to change map to filter and add a sort function */}

                        {this.props.employees.map((employee) => (

                            < tr >
                                <th scope="row"></th>

                                <td>
                                    <img
                                        src={employee.picture.medium}
                                        alt='employee'
                                    />
                                </td>
                                {/* onClick for sort? */}

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

