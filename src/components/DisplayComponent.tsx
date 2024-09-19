import '../css/DisplayComponent.css'
import { IpData } from './IpDisplayComponent';
const DisplayComponent = ({ ipData }: { ipData: IpData | null }) => {
    if (!ipData) return null;
    return (
        <div className='displayContainer'>
            <div className="display">
                <div className="infoSection">
                    <p>IP ADDRESS</p>
                    <h2>{ipData.ip}</h2>
                </div>
                <div className="infoSection">
                    <p>LOCATION</p>
                    <h2>{ipData.location.city}, {ipData.location.country}</h2>
                    <h2>{ipData.location.postalCode}</h2>
                </div>
                <div className="infoSection">
                    <p>TIMEZONE</p>
                    <h2>{ipData.location.timezone}</h2>
                </div>
                <div className="infoSection">
                    <p>ISP</p>
                    <h2>{ipData.isp}</h2>
                </div>
            </div>
        </div>
    );
}

export default DisplayComponent;
