import React from 'react';
import axios from "axios";

export default class SearchBar extends React.Component {

    state = {
        search: "",
        employees: []
    };

    // searchEmployee = () => {

    //     this.setState = (
    //         {

    //         }
    //     )

    // }

    handleChange = (event) => {
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
                    employees: response.data.name
                }
            )

        })
            .catch((err) => {
                console.log(err);
            })
    }




    render() {
        return (
            <div>
                <form>
                    <input
                        name="search"
                        value={this.props.search}
                        handleInputChange={this.handleInputChange}>

                    </input>
                    <button handleSubmit={this.handleSubmission}>
                        Search
                    </button>
                </form>
            </div>
        )
    };
}