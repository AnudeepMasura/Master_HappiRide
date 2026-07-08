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

                        <th>RIDER ID</th>

                        <th>USERNAME</th>

                        <th>FULL NAME</th>

                        <th>MOBILE</th>

                        <th>SERVICE</th>

                        <th>PERSONAL</th>

                        <th>RIDER KYC</th>

                        <th>VEHICLE KYC</th>

                        <th>PREV REJECTED</th>

                        <th>PREV REJ REASON</th>

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
