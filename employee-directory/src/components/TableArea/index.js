import React from 'react';
import axios from "axios";
import PageHeader from '../PageHeader';
import SearchBar from '../SearchBar';
import TableData from '../TableData';
import TableHeader from '../TableHeader';
import getEmployeeName from "../../util/API";



export default class TableArea extends React.Component {

    state = {
        search: "name",
        employees: []
    };

    componentDidMount = () => {
        this.searchEmployee();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    searchEmployee = () => [
        getEmployeeName(this.state.search)
            .then((response) => {

                // Filter this employees: response.data.results


                // const employees = employees.filter(emp =>
                //     emp.name.includes(response.data.results)
                // );
                // const employeeName = response.data.results.filter(employeeName => {
                //     employeeName.name.includes(employeeName.name)
                // })



                console.log(response);

                this.setState(
                    {
                        // API returns "results" 
                        employees: response.data.results
                        // employees: employeeName
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    ]

    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log("stuff");
        // const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

        // const BASEURL = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

        this.searchEmployee();

    }



    render() {
        return (
            <div className="wrapper" >

                <PageHeader />

                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />

                <TableHeader />
                <TableData
                    employees={this.state.employees}
                />

            </div>
        );
    }

}
