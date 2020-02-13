import React, { useReducer } from 'react';
// What goes here?

export default class TableData extends React.Component {






    render() {
        return (
            <div>
                {/* TableData */}
                <table className="table">
                    <tbody>
                        {/* /* {employee.map((employee) => (


                            // <tr>
                            //     <th scope="row">1</th>
                            //     <td image={employee.image}></td>
                            //     <td name={employee.name}></td>
                            //     <td phone={employee.phone}></td>
                            //     <td email={employee.email}></td>
                            //     <td DOB={employee.DOB}></td>
                            // </tr>

                            // Or   
                            // it would be this one: 
                            <tr>
                                <th scope="row">1</th>
                                <td image={this.employee.image}></td>
                                <td name={this.employee.name}></td>
                                <td phone={this.employee.phone}></td>
                                <td email={this.employee.email}></td>
                                <td DOB={this.employee.DOB}></td>
                            </tr>

                    ))}  */}

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

