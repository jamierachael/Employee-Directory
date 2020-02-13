import React from 'react';
import axios from "axios";

import PageHeader from '../PageHeader';
import SearchBar from '../SearchBar';
import TableData from '../TableData';
import TableHeader from '../TableHeader';

// export default class TableArea extends React.Component {
//     render() {
//         return (
//             <div className="wrapper">


//             </div>
//         )
//     }
// }

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
                <SearchBar handleInputChange={this.handleInputChange} />

                <TableHeader />
                <TableData />

            </div>
        )
    }

}
