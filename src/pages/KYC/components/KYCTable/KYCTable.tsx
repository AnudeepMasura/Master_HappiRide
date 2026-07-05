import "./KYCTable.css";

import type { KYCRecord } from "../../types";

import KYCRow from "./KYCRow";

interface KYCTableProps {

    records: KYCRecord[];

}

const KYCTable = ({
    records
}: KYCTableProps) => {

    return (

        <div className="kyc-table-wrapper">

            <table className="kyc-table">

                <thead>

                    <tr>

                        <th>Rider ID</th>

                        <th>Username</th>

                        <th>Full Name</th>

                        <th>Mobile</th>

                        <th>Service</th>

                        <th>Personal Details</th>

                        <th>Rider KYC</th>

                        <th>Vehicle KYC</th>

                        <th>Status</th>

                        <th>Verified By</th>

                        <th>Rejections</th>

                        <th>Rejected Reason</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        records.map((record)=>(

                            <KYCRow

                                key={record.id}

                                record={record}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default KYCTable;