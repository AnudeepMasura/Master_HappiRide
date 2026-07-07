import "./RidersHeader.css";

import { Search, Filter } from "lucide-react";

interface RidersHeaderProps {

    search:string;

    onSearchChange:(value:string)=>void;

    onFilterClick:()=>void;

}

const RidersHeader=({

    search,

    onSearchChange,

    onFilterClick

}:RidersHeaderProps)=>{

    return(

        <div className="riders-header">

            <div className="riders-title">

                <h1>

                    Riders Management

                </h1>

            </div>

            <div className="riders-toolbar">

                <div className="search-box">

                    <Search size={20}/>

                    <input

                        type="text"

                        placeholder="Search by rider name, phone, or Rider ID..."

                        value={search}

                        onChange={(e)=>onSearchChange(e.target.value)}

                    />

                </div>

                <button

                    className="filter-btn"

                    onClick={onFilterClick}

                >

                    <Filter size={18}/>

                    Filter

                </button>

            </div>

        </div>

    );

};

export default RidersHeader;