import "./KYCRow.css";

import ServiceBadge from "../ServiceBadge/ServiceBadge";
import StatusBadge from "../StatusBadge/StatusBadge";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

import type { KYCRecord } from "../../types";

interface KYCRowProps {

    record: KYCRecord;

}

const KYCRow = ({
    record
}:KYCRowProps)=>{

    return(

        <tr>

            <td>{record.riderId}</td>

            <td>{record.username}</td>

            <td>{record.fullName}</td>

            <td>{record.mobile}</td>

            <td>

                <ServiceBadge

                    serviceType={record.service}

                />

            </td>

            <td>

                <DocumentViewer

                    available={record.personalDocument}

                    title="Personal Document"

                />

            </td>

            <td>

                <DocumentViewer

                    available={record.riderKYC}

                    title="Rider KYC"

                />

            </td>

            <td>

                <DocumentViewer

                    available={record.vehicleKYC}

                    title="Vehicle KYC"

                />

            </td>

            <td>

                <StatusBadge

                    status={record.status}

                />

            </td>

            <td>

                {

                    record.verifiedBy || "—"

                }

            </td>

            <td>

                {record.rejectionCount}

            </td>

            <td>

                {

                    record.rejectedReason

                    ?

                    <DocumentViewer

                        available={true}

                        title={record.rejectedReason}

                    />

                    :

                    "—"

                }

            </td>

        </tr>

    );

};

export default KYCRow;