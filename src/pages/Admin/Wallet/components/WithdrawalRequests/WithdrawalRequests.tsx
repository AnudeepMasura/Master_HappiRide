import "./WithdrawalRequests.css";

import { useEffect, useState } from "react";

import { getWalletData } from "../../api";

import type { WithdrawalRequest } from "../../types";

const WithdrawalRequests = () => {

    const [withdrawals, setWithdrawals] = useState<WithdrawalRequest[]>([]);

    useEffect(() => {

        loadWithdrawals();

    }, []);

    const loadWithdrawals = async () => {

        try {

            const data = await getWalletData();

            setWithdrawals(data.withdrawals);

        }

        catch(error){

            console.error(error);

        }

    };

    return(

        <section className="withdrawal-section">

            <div className="withdrawal-header">

                <h2>

                    Withdrawal Requests

                </h2>

                <button>

                    View All

                </button>

            </div>

            <table className="withdrawal-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Date</th>

                        <th>Username</th>

                        <th>Type</th>

                        <th>Amount</th>

                        <th>Balance</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        withdrawals.map((item)=>(

                            <tr key={item.id}>

                                <td>{item.requestId}</td>

                                <td>{item.requestDate}</td>

                                <td>{item.username}</td>

                                <td>{item.userType}</td>

                                <td>{item.withdrawalAmount}</td>

                                <td>{item.availableBalance}</td>

                                <td>

                                    <span
                                        className={`status ${item.status.toLowerCase()}`}
                                    >

                                        {item.status}

                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </section>

    );

};

export default WithdrawalRequests;
