import { useState } from 'react';
import DALLE from './DALLE';
import './home.css';
import ImageVariationGenerator from './ImageVarationGenerator';
import ImageEditor from './ImageEditor';

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
                    CREA
                </button>
                <button
                    className={activeTab === 'componente2' ? 'active' : ''}
                    onClick={() => handleTabClick('componente2')}>
                    VARIA
                </button>
                <button
                    className={activeTab === 'componente3' ? 'active' : ''}
                    onClick={() => handleTabClick('componente3')}>
                    EDITA
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'componente1' && <Componente1 />}
                {activeTab === 'componente2' && <Componente2 />}
                {activeTab === 'componente3' && <Componente3 />}
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

export default TabMenu;
