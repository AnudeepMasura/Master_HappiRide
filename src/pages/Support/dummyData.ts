import type { SupportResponse } from "./types";

export const supportDummy:SupportResponse={

stats:{

totalTickets:128,

userTickets:85,

riderTickets:43

},

tickets:[

{

id:1,

ticketId:"#TK-8821",

date:"02/07/2026",

issue:"App login issue",

raisedBy:"User",

location:"AP, India",

status:"Ongoing",

reportTo:"",

reportStatement:""

},

{

id:2,

ticketId:"#TK-8820",

date:"01/07/2026",

issue:"Payment Refund",

raisedBy:"Partner",

location:"KA, India",

status:"Closed",

reportTo:"N/A",

reportStatement:"None"

},

{

id:3,

ticketId:"#TK-8819",

date:"30/06/2026",

issue:"Ride Cancellation",

raisedBy:"Rider",

location:"TS, India",

status:"Ongoing",

reportTo:"",

reportStatement:""

},

{

id:4,

ticketId:"#TK-8818",

date:"29/06/2026",

issue:"Wallet Balance Missing",

raisedBy:"User",

location:"MH, India",

status:"Closed",

reportTo:"N/A",

reportStatement:"None"

}

]

};