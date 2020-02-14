import React from 'react';
import axios from "axios";
import PageHeader from '../PageHeader';
import SearchBar from '../SearchBar';
import TableData from '../TableData';
import TableHeader from '../TableHeader';



export default class TableArea extends React.Component {

    state = {
        search: "",
        employees: []
    };


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

        // const BASEURL = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

        axios.get(BASEURL).then((response) => {
            console.log(response);
            // response.data.name;
            this.setState(
                {
                    // API returns "results" not "data"
                    employees: response.results.name
                }
            )

        })
            .catch((err) => {
                console.log(err);
            })
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
