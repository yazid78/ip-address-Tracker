import { useState } from 'react';
import '../css/HeaderComponent.css';

type HeaderProps = {
    setIp: (ip: string) => void;
};

const Header = ({ setIp }: HeaderProps) => {
    const [inputValue, setInputValue] = useState('');
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    const handleClick = () => {
        if (inputValue.trim().match(ipPattern)) {
            setIp(inputValue);

        } else {
            alert('Adresse IP invalide');
        }
    };

    const handleEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (inputValue.trim().match(ipPattern)) {
                setIp(inputValue);
            } else {
                alert('Adresse IP invalide');
            }
        }
    };

    return (
        <nav>
            <img src="../../images/pattern-bg-desktop.png" alt="image header" />

            <div className='input'>

                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Search for any IP address or domain'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleEnter}
                />

                <button onClick={handleClick}>
                    <img src="../../images/icon-arrow.svg" alt="Search" />
                </button>
            </div>
            <h1 className='title'>IP Address Tracker</h1>

        </nav>

    );
};

export default Header;
