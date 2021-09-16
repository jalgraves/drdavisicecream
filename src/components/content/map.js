import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 42.678119305642355, lng: -71.57866338780913 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 42.678119305642355, lng: -71.57866338780913 }} />}
    </GoogleMap>
))

export const BrooklineMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 42.72339897913884, lng: -71.66212418666909 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 42.72339897913884, lng: -71.66212418666909 }} />}
    </GoogleMap>
))
