import { useEffect, useState } from "react";
import LeafletComponent from "./LeafletComponent";
import DisplayComponent from "./DisplayComponent";
import Header from "./HeaderComponent";

type Location = {
    city: string;
    country: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
};

export type IpData = {
    ip: string;
    isp: string;
    location: Location;
};

const IpDisplayComponent = () => {
    const [ip, setIp] = useState<string>('');
    const [ipData, setIpData] = useState<IpData | null>(null);

    useEffect(() => {
        if (!ip) {
            fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => setIp(data.ip))
                .catch(error => console.error('Erreur lors de la récupération de l\'IP utilisateur :', error));
        }
    }, [ip]);

    useEffect(() => {
        if (ip) {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_iVJX9fQnzybwcCsRMArMBnLMhQkpT&ipAddress=${ip}`)
                .then(response => response.json())
                .then(data => {
                    setIpData(data);
                })
                .catch(error => console.error('Erreur lors de la récupération des informations IP :', error));
        }
    }, [ip]);

    return (
        <div className="mapContainer">
            <Header setIp={setIp} />
            <DisplayComponent ipData={ipData} />
            <LeafletComponent ipData={ipData} />
        </div>
    );
};

export default IpDisplayComponent;
