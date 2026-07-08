import {
    Eye
} from "lucide-react";


import type {
    UserRecord
} from "../../types";


import "./UsersTable.css";


interface UsersTableProps {

    users: UserRecord[];

    onViewReferrals:
        (user: UserRecord) => void;

    onViewPersonalDetails:
        (user: UserRecord) => void;

    onViewRides:
        (user: UserRecord) => void;

    onViewSupport:
        (user: UserRecord) => void;

}


const UsersTable = ({

    users,

    onViewReferrals,

    onViewPersonalDetails,

    onViewRides,

    onViewSupport

}: UsersTableProps) => {


    const formatCurrency = (
        value: number
    ) => {

        return `₹${

            value.toLocaleString(
                "en-IN"
            )

        }`;

    };


    const renderRating = (
        rating: number
    ) => {

        return (

            <span className="users-rating">

                {
                    Array.from(
                        {
                            length: 5
                        }
                    ).map(
                        (_, index) => (

                            <span
                                key={index}
                                className={
                                    index < rating

                                        ? "users-star active"

                                        : "users-star"
                                }
                            >

                                ★

                            </span>

                        )
                    )
                }

            </span>

        );

    };


    return (

        <div className="users-table-wrapper">


            <table className="users-table">


                <thead>

                    <tr>

                        <th>ID</th>

                        <th>USERNAME</th>

                        <th>FULL NAME</th>

                        <th>PHONE</th>

                        <th>GENDER / DOB</th>

                        <th>GMAIL</th>

                        <th>PERSONAL DETAILS</th>

                        <th>REFERRAL CODE</th>

                        <th>REFERRED BY</th>

                        <th>REFERRED GUY EARNINGS</th>

                        <th>REFERRED TO</th>

                        <th>EARNINGS FROM REFERRALS</th>

                        <th>TRIPS</th>

                        <th>GOV</th>

                        <th>PLATFORM EARNINGS</th>

                        <th>REFERRAL</th>

                        <th>DIST. (KM)</th>

                        <th>RATING</th>

                        <th>SUPPORT</th>

                        <th>STATUS</th>

                        <th>DONE BY</th>

                    </tr>

                </thead>


                <tbody>


                    {
                        users.map(
                            (user) => (

                                <tr key={user.id}>


                                    <td className="users-id">

                                        {user.id}

                                    </td>


                                    <td className="users-username">

                                        {user.username}

                                    </td>


                                    <td>

                                        {user.fullName}

                                    </td>


                                    <td>

                                        {user.phone}

                                    </td>


                                    <td>

                                        {
                                            user.gender
                                        }

                                        {" / "}

                                        {
                                            user.dob
                                        }

                                    </td>


                                    <td className="users-email">

                                        {user.gmail}

                                    </td>

                                    <td>

                                        <button

                                            type="button"

                                            className="users-eye-button"

                                            onClick={() =>

                                                onViewPersonalDetails(
                                                    user
                                                )

                                            }

                                            title="View Personal Details"

                                        >

                                            <Eye size={18} />

                                        </button>

                                    </td>


                                    <td className="users-referral-code">

                                        {user.referralCode}

                                    </td>


                                    <td>

                                        {user.referredBy}

                                    </td>

                                    <td>

                                        {
                                            formatCurrency(
                                                user.referredGuyEarnings
                                            )
                                        }

                                    </td>


                                    <td>

                                        <div className="users-value-action">

                                            <span>

                                                {
                                                    user.referredTo.length
                                                }

                                            </span>


                                            <button

                                                type="button"

                                                className="users-eye-button"

                                                onClick={() =>

                                                    onViewReferrals(
                                                        user
                                                    )

                                                }

                                                title="View Referrals"

                                            >

                                                <Eye size={18} />

                                            </button>

                                        </div>

                                    </td>

                                    <td>

                                        {
                                            formatCurrency(
                                                user.earningsFromReferrals
                                            )
                                        }

                                    </td>


                                    <td>

                                        <div className="users-value-action">

                                            <span>

                                                {
                                                    user.ridesCompleted
                                                }

                                            </span>


                                            <button

                                                type="button"

                                                className="users-eye-button"

                                                onClick={() =>

                                                    onViewRides(
                                                        user
                                                    )

                                                }

                                                title="View Rides"

                                            >

                                                <Eye size={18} />

                                            </button>

                                        </div>

                                    </td>


                                    <td>

                                        {
                                            formatCurrency(
                                                user.gov
                                            )
                                        }

                                    </td>


                                    <td>

                                        {
                                            formatCurrency(
                                                user.platformEarning
                                            )
                                        }

                                    </td>

                                    <td>

                                        {user.referral}

                                    </td>


                                    <td>

                                        {user.distance}

                                    </td>


                                    <td>

                                        {
                                            renderRating(
                                                user.rating
                                            )
                                        }

                                    </td>


                                    <td>

                                        <div className="users-value-action">

                                            <span>

                                                {
                                                    user.supportTickets
                                                }

                                            </span>


                                            <button

                                                type="button"

                                                className="users-eye-button"

                                                onClick={() =>

                                                    onViewSupport(
                                                        user
                                                    )

                                                }

                                                title="View Support Tickets"

                                            >

                                                <Eye size={18} />

                                            </button>

                                        </div>

                                    </td>


                                    <td>

                                        <span
                                            className={
                                                user.status === "Active"

                                                    ? "users-status active"

                                                    : "users-status blocked"
                                            }
                                        >

                                            {user.status}

                                        </span>

                                    </td>


                                    <td className="users-done-by">

                                        {user.doneBy}

                                    </td>


                                </tr>

                            )
                        )
                    }


                </tbody>


            </table>


            {
                users.length === 0 && (

                    <div className="users-empty-state">

                        No users found

                    </div>

                )
            }


        </div>

    );

};


export default UsersTable;
