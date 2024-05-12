import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const markers = [
    {
        name: 'Vega Techada de Los Ángeles (Comunidad de Frutas y Verduras)',
        coords: [-37.46602347764664, -72.34759228583425]
    }
];

export const LeafletMap = () => {
    return (
        <div className='mx-auto'>
            <MapContainer id='map' style={{ height: '100vh' }} center={markers[0].coords} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={markers[0].coords}>
                    <Popup >
                        <p style={{ fontSize: 20 }}>{markers[0].name}</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};