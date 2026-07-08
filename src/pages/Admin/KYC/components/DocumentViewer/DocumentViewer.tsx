import "./DocumentViewer.css";

import { Eye } from "lucide-react";

interface DocumentViewerProps{

    available:boolean;

    title:string;

}

const DocumentViewer=({

    available,

    title

}:DocumentViewerProps)=>{

    const handleClick=()=>{

        console.log(title);

        // =======================================
        // Backend
        //
        // Open document preview modal
        //
        // openDocument(documentId)
        //
        // =======================================

    };

    if(!available){

        return(

            <span className="document-na">

                N/A

            </span>

        );

    }

    return(

        <button

            className="document-view-btn"

            onClick={handleClick}

            title={title}

        >

            <Eye size={18}/>

        </button>

    );

};

export default DocumentViewer;