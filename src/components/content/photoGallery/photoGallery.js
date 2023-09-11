import React from 'react'
import { config } from '../../../utils/index.js'

const STATIC_PATH = `${config.urls.static}/img/slider`

const photoStyles = {
  padding: "1rem",
  display: "flex"
}

const galleryStyles = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  margin: "auto"
}

const imgStyles = {
  maxWidth: "250px",
  borderRadius: "6px"
}

export const PhotoGallery = (props) => {
  const renderItems = (items) => {
    const galleryPhotos = []
    let cnt = 0
    for (const item of Object(items)) {
      galleryPhotos.push(
        <div style={photoStyles} key={cnt}><img style={imgStyles} src={`${STATIC_PATH}/${item}`}  alt={item} /></div>
      )
      cnt++
    }
    return (
      <div style={galleryStyles}>
        {galleryPhotos}
      </div>
    )
  }
  return (
    <div className="photoGallery" aria-labelledby="PhotoGallery images container">
      {renderItems(props.images)}
    </div>
  )
}
