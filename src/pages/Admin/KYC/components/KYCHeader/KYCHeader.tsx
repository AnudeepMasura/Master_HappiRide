import "./KYCHeader.css";

import { Search } from "lucide-react";

interface KYCHeaderProps {

    search: string;

    onSearchChange: (value: string) => void;

    onExport: () => void;

}

const KYCHeader = ({
    search,
    onSearchChange
}: KYCHeaderProps) => {

    return (

        <div className="kyc-header">

            <div className="kyc-title">

                <h1>

                    KYC Management

                </h1>

            </div>

            <div className="kyc-actions">

                <div className="search-box">

                    <Search size={18} />

                    <input

                        type="text"

                        placeholder="Search by name or Rider ID"

                        value={search}

                        onChange={(e)=>

                            onSearchChange(e.target.value)

                        }

                    />

                </div>

               

            </div>

        </div>

    );

};

export default KYCHeader;
