import React, { useState } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setActiveButton(null); // Reset the active button when changing tabs
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        <div className="tab-container">
            <ul className="tab-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
            <div className="tab-buttons">
                {tabs[activeTab].buttons.map((button, index) => (
                    <div key={index}>
                        <button onClick={() => handleButtonClick(index)} className="white-button">
                            {button.label}
                        </button>
                        {activeButton === index && (
                            <div className="button-content">
                                {button.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tab;