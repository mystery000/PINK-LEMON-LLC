import { useState } from 'react';
import DALLE from './DALLE';
import './home.css';
import ImageVariationGenerator from './ImageVarationGenerator';
import ImageEditor from './ImageEditor';
import PricesUser from './PricesUser';

const TabMenu = () => {
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
                    PINKPIC
                </button>
                <button
                    className={activeTab === 'componente2' ? 'active' : ''}
                    onClick={() => handleTabClick('componente2')}>
                    PINKVAR
                </button>
                <button
                    className={activeTab === 'componente3' ? 'active' : ''}
                    onClick={() => handleTabClick('componente3')}>
                    PINKEDIT
                </button>
                <button
                    className={activeTab === 'componente4' ? 'active' : ''}
                    onClick={() => handleTabClick('componente4')}>
                    ACQUISTA TOKEN
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'componente1' && <Componente1 />}
                {activeTab === 'componente2' && <Componente2 />}
                {activeTab === 'componente3' && <Componente3 />}
                {activeTab === 'componente4' && <Componente4 />}
            </div>
        </div>
    );
};

const Componente1 = () => {
    return (
        <div>
            <DALLE></DALLE>
        </div>
    );
};

const Componente2 = () => {
    return (
        <div>
            <ImageVariationGenerator></ImageVariationGenerator>
        </div>
    );
};

const Componente3 = () => {
    return (
        <div>
            <ImageEditor></ImageEditor>
        </div>
    );
};

const Componente4 = () => {
    return (
        <div>
            <PricesUser></PricesUser>
        </div>
    );
};

export default TabMenu;
