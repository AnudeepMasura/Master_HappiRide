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

                    <input

                        type="text"

                        placeholder="Search..."

                        value={search}

                        onChange={(e)=>

                            onSearchChange(e.target.value)

                        }

                    />

                    <Search
                        className="search-box__icon"
                        size={24}
                    />

                </div>

               

            </div>

        </div>

    );

};

export default KYCHeader;
