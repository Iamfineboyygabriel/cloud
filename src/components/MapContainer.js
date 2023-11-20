import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const item = {
        name: 'GoMyCode',
        location: {
        lat: 6.498615597187763,
        lng: 3.3761259743900904,
        },
    };
    
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const defaultCenter = {
        lat: 6.498615597187763,
        lng: 3.3761259743900904,
    };

    return (
        <div>
        <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker key={item.name} position={item.location} />
            </GoogleMap>
        </LoadScript>
        </div>
    );
};

export default MapContainer;
