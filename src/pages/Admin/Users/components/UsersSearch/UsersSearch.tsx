import {
    Filter
} from "lucide-react";


import "./UsersSearch.css";


interface UsersSearchProps {

    searchValue: string;

    onSearchChange:
        (value: string) => void;

}


const UsersSearch = ({

    searchValue,

    onSearchChange

}: UsersSearchProps) => {


    const handleFilter = () => {

        console.log(
            "Current users filter:",
            searchValue
        );

    };


    return (

        <div className="users-search">


            <input

                type="text"

                placeholder="Search by name, phone, or ID..."

                value={
                    searchValue
                }

                onChange={(event) =>

                    onSearchChange(
                        event.target.value
                    )

                }

            />


            <button

                type="button"

                className="users-filter-button"

                onClick={
                    handleFilter
                }

            >

                <Filter size={17} />

                <span>

                    Filter

                </span>

            </button>


        </div>

    );

};


export default UsersSearch;