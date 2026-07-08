import "./Wallet.css";

import WalletHeader from "./components/WalletHeader/WalletHeader";
import WalletStats from "./components/WalletStats/WalletStats";
import WithdrawalRequests from "./components/WithdrawalRequests/WithdrawalRequests";

const Wallet = () => {
    return (

        <div className="wallet-page fade-in">

            <WalletHeader />

            <WalletStats />

            <WithdrawalRequests />

        </div>

    );

};

export default Wallet;
