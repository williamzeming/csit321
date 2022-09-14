import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import key from './key.json'


function MyComponent({lat, lng}) {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    console.log(lat,lng)
    const center = {
        lat: lat,
        lng:  lng
    };
    const position = {
        lat: lat,
        lng:  lng
    }


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
            // onLoad={onLoad}
            onUnmount={onUnmount}

        >
            <Marker
                position={position}
            />
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)