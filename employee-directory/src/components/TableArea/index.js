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
                console.log(response);



                this.setState(
                    {
                        // API returns "results" not "data"
                        employees: response.data.results
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

        // axios.get(BASEURL).
        this.searchEmployee();

    }



    render() {
        return (
            <div className="wrapper" >

                {/* {this.props.children} */}
                <PageHeader />
                {/* Where does handle submit go? */}
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                // Added search and handle submit
                />

                <TableHeader />
                <TableData
                    // uncomment to test 
                    employees={this.state.employees}

                />

            </div>
        );
    }

}
