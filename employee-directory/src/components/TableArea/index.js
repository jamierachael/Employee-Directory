import React from 'react';
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
        getEmployeeName()
            .then((response) => {

                let filter = this.state.search;
                // let resultsArray = [];
                let filteredList = response.data.results.filter(item => {
                    // merge data together, then see if user input is anywhere inside  

                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();

                    return values.indexOf(filter.toLowerCase()) !== -1;


                });

                // console.log(filteredList);

                this.setState(
                    {
                        // API returns "results" 
                        // search: "name",
                        employees: filteredList
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
