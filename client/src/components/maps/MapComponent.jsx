import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



function MapComponent({children}) {
    return (
        <div>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: 40.7128, lng: 74.0060}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                >
                    {children}
                </Map>
                
            </APIProvider>
        </div>
    )
}

export default MapComponent;
