import React, { useReducer } from 'react';
// What goes here?

export default class TableData extends React.Component {






    render() {
        return (
            <div>
                {/* TableData */}
                <table className="table">
                    <tbody>
                        {/* {this.props.employees.map((employees) => ( */}
                        {/* or  */}
                        {/* {employees.map((employees) => ( */}
                        {/* 

                            // <tr>
                            //     <th scope="row">1</th>
                            //     <td image={employees.image}></td>
                            //     <td name={employees.name}></td>
                            //     <td phone={employees.phone}></td>
                            //     <td email={employees.email}></td>
                            //     <td DOB={employees.DOB}></td>
                            // </tr> */}

                        {/* // Or   
                            // it would be this one:  */}
                        {/* <tr>
                                <th scope="row">1</th>
                                <td image={this.employees.image}></td>
                                <td name={this.employees.name}></td>
                                <td phone={this.employees.phone}></td>
                                <td email={this.employees.email}></td>
                                <td DOB={this.employees.DOB}></td>
                            </tr> */}

                        {/* ))} */}

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

