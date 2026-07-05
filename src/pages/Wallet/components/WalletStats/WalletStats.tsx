import { useEffect, useState } from "react";

import "./WalletStats.css";

import WalletCard from "../WalletCard/WalletCard";

import { getWalletData } from "../../api";

import type { WalletStat } from "../../types";

const WalletStats = () => {

    const [stats, setStats] = useState<WalletStat[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadWalletStats();

    }, []);

    const loadWalletStats = async () => {

        try {

            setLoading(true);

            const response = await getWalletData();

            setStats(response.stats);

        }

        catch (error) {

            console.error("Wallet Stats Error:", error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="wallet-loading">

                Loading Wallet Statistics...

            </div>

        );

    }

    return (

        <section className="wallet-stats">

            {

                stats.map((item) => (

                    <WalletCard

                        key={item.id}

                        data={item}

                    />

                ))

            }

        </section>

    );

};

export default WalletStats;