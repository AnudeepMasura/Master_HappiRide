import "./SupportRow.css";

import type { SupportTicket } from "../../types";

import StatusBadge from "../StatusBadge/StatusBadge";
import ViewButton from "../ViewButton/ViewButton";
import ReportDropdown from "../ReportDropdown/ReportDropdown";
import ReportStatement from "../ReportStatement/ReportStatement";
import ActionButton from "../ActionButton/ActionButton";

interface SupportRowProps{

    ticket:SupportTicket;

}

const SupportRow=({

    ticket

}:SupportRowProps)=>{

    return(

        <tr>

            <td>

                {ticket.ticketId}

            </td>

            <td>

                {ticket.date}

            </td>

            <td>

                {ticket.issue}

            </td>

            <td>

                {ticket.raisedBy}

            </td>

            <td>

                {ticket.location}

            </td>

            <td>

                <StatusBadge

                    status={ticket.status}

                />

            </td>

            <td>

                <ViewButton

                    ticketId={ticket.ticketId}

                />

            </td>

            <td>

                <ReportDropdown/>

            </td>

            <td>

                <ReportStatement/>

            </td>

            <td>

                <ActionButton/>

            </td>

        </tr>

    );

};

export default SupportRow;