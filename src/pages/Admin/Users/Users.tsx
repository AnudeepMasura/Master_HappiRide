import {
    useEffect,
    useState
} from "react";


import UsersHeader
from "./components/UsersHeader/UsersHeader";


import UsersSearch
from "./components/UsersSearch/UsersSearch";


import UsersTable
from "./components/UsersTable/UsersTable";


import UsersPagination
from "./components/UsersPagination/UsersPagination";


import {
    getUsersData
} from "./api";


import type {
    UserRecord,
    UsersResponse
} from "./types";


import "./Users.css";


const Users = () => {


    /* ==========================================
       Users Data
    ========================================== */

    const [usersData, setUsersData] =
        useState<UsersResponse | null>(
            null
        );


    /* ==========================================
       Search
    ========================================== */

    const [searchValue, setSearchValue] =
        useState("");


    /* ==========================================
       Pagination
    ========================================== */

    const [currentPage, setCurrentPage] =
        useState(1);


    const usersPerPage = 2;


    /* ==========================================
       Loading & Error
    ========================================== */

    const [loading, setLoading] =
        useState(true);


    const [error, setError] =
        useState("");


    /* ==========================================
       Load Users
    ========================================== */

    useEffect(() => {

        loadUsersData();

    }, []);


    const loadUsersData = async () => {

        try {

            setLoading(true);

            setError("");


            const data =
                await getUsersData();


            setUsersData(data);

        }

        catch (error) {

            console.error(
                "Users loading error:",
                error
            );


            setError(
                "Unable to load users data"
            );

        }

        finally {

            setLoading(false);

        }

    };


    /* ==========================================
       Search Change
    ========================================== */

    const handleSearchChange = (
        value: string
    ) => {

        setSearchValue(value);

        setCurrentPage(1);

    };


    /* ==========================================
       View Personal Details
    ========================================== */

    const handleViewPersonalDetails = (
        user: UserRecord
    ) => {

        alert(

            `${user.fullName}\n\nGender: ${user.gender}\nDOB: ${user.dob}\nGmail: ${user.gmail}\nPhone: ${user.phone}`

        );

    };


    /* ==========================================
       View Referrals
    ========================================== */

    const handleViewReferrals = (
        user: UserRecord
    ) => {

        if (
            user.referredTo.length === 0
        ) {

            alert(
                `${user.fullName} has not referred any users.`
            );

            return;

        }


        alert(

            `${user.fullName} referred:\n\n${

                user.referredTo.join("\n")

            }`

        );

    };


    /* ==========================================
       View Rides
    ========================================== */

    const handleViewRides = (
        user: UserRecord
    ) => {

        alert(

            `${user.fullName} completed ${user.ridesCompleted} rides.`

        );

    };


    /* ==========================================
       View Support Tickets
    ========================================== */

    const handleViewSupport = (
        user: UserRecord
    ) => {

        alert(

            `${user.fullName} has ${user.supportTickets} support ticket(s).`

        );

    };


    /* ==========================================
       Loading State
    ========================================== */

    if (loading) {

        return (

            <div className="users-loading">

                Loading users...

            </div>

        );

    }


    /* ==========================================
       Error State
    ========================================== */

    if (
        error ||
        !usersData
    ) {

        return (

            <div className="users-error">

                {
                    error ||
                    "Users data unavailable"
                }

            </div>

        );

    }


    /* ==========================================
       Filter Users
    ========================================== */

    const normalizedSearch =
        searchValue
            .trim()
            .toLowerCase();


    const filteredUsers =
        usersData.users.filter(
            (user) => {

                if (!normalizedSearch) {

                    return true;

                }


                return (

                    user.fullName
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                    ||

                    user.username
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                    ||

                    user.phone
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                    ||

                    user.id
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                    ||

                    user.gmail
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                    ||

                    user.referralCode
                        .toLowerCase()
                        .includes(
                            normalizedSearch
                        )

                );

            }
        );


    /* ==========================================
       Pagination Calculation
    ========================================== */

    const totalPages = Math.max(

        1,

        Math.ceil(

            filteredUsers.length /
            usersPerPage

        )

    );


    const startIndex =

        (
            currentPage - 1
        ) * usersPerPage;


    const paginatedUsers =

        filteredUsers.slice(

            startIndex,

            startIndex + usersPerPage

        );


    /* ==========================================
       Users Page
    ========================================== */

    return (

        <div className="users-page">


            <UsersHeader />


            <UsersSearch

                searchValue={
                    searchValue
                }

                onSearchChange={
                    handleSearchChange
                }

            />


            <div className="users-table-card">


                <UsersTable

                    users={
                        paginatedUsers
                    }

                    onViewReferrals={
                        handleViewReferrals
                    }

                    onViewPersonalDetails={
                        handleViewPersonalDetails
                    }

                    onViewRides={
                        handleViewRides
                    }

                    onViewSupport={
                        handleViewSupport
                    }

                />


                <UsersPagination

                    currentPage={
                        currentPage
                    }

                    totalPages={
                        totalPages
                    }

                    showingCount={
                        paginatedUsers.length
                    }

                    totalUsers={
                        usersData.totalUsers
                    }

                    onPageChange={
                        setCurrentPage
                    }

                />


            </div>


        </div>

    );

};


export default Users;
