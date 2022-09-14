import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import key from './key.json'
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -34.4218852121606,
    lng:  150.90963698229393
};
const position = {
    lat: -34.4218852121606,
    lng:  150.90963698229393
}

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key.mapkey
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap

            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}

        >
            <Marker
                position={position}
            />
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)