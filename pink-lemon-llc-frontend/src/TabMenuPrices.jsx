/* eslint-disable prettier/prettier */
import { useState } from 'react';

import './home.css';
import PricesSubscript from './PricesSubscript';
import PricesPackage from './PricesPackage';

const TabMenuPrices = () => {
    const [activeTab, setActiveTab] = useState('componente1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tab-buttons">
                <button
                    className={activeTab === 'componente1' ? 'active' : ''}
                    onClick={() => handleTabClick('componente1')}>
                    ONE TIME PURCHASE
                </button>
                <button
                    className={activeTab === 'componente2' ? 'active' : ''}
                    onClick={() => handleTabClick('componente2')}>
                    SUBSCRIPTION
                </button>

            </div>

            <div className="tab-content">
                {activeTab === 'componente1' && <Componente1 />}
                {activeTab === 'componente2' && <Componente2 />}

            </div>
        </div>
    );
};

const Componente1 = () => {
    return (
        <div>
            <PricesPackage></PricesPackage>
        </div>
    );
};

const Componente2 = () => {
    return (
        <div>
            <PricesSubscript></PricesSubscript>
        </div>
    );
};



export default TabMenuPrices;