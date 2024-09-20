import { Icon } from 'leaflet';
import '../css/LeafletComponent.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IpData } from './IpDisplayComponent';
import iconUrl from '../../images/icon-location.svg';

const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [38, 48]
});

const LeafletComponent = ({ ipData }: { ipData: IpData | null }) => {
    if (!ipData) return null;

    return (

        <MapContainer
            key={`${ipData.location.lat}-${ipData.location.lng}`}
            center={[ipData.location.lat, ipData.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ipData.location.lat, ipData.location.lng]} icon={customIcon}>
                <Popup>
                    {ipData.location.city}, {ipData.location.country}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletComponent;
