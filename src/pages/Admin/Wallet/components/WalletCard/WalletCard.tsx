import "./WalletCard.css";

import type { WalletStat } from "../../types";

interface WalletCardProps {
    data: WalletStat;
}

const WalletCard = ({ data }: WalletCardProps) => {

    return (

        <div className="wallet-card">

            <p className="wallet-card-title">

                {data.title}

            </p>

            <h2 className="wallet-card-value">

                {data.value}

            </h2>

        </div>

    );

};

export default WalletCard;