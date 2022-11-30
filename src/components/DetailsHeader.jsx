import React from 'react'
import { Link } from 'react-router-dom'

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="detailsHeader">
      <div className="profiles" />

      <div className="artistProfile">
        <img
          alt="profile"
          src={
            artistId
              ? artistData.artists[artistId].attributes.artwork.url
                  .replace('{w}', '500')
                  .replace('{h}', '500')
              : songData?.images?.coverart
          }
          className="artistImage"
        />

        <div className="artistData">
          <p className="artistSongData">
            {artistId
              ? artistData?.artists[artistId]?.attributes?.name
              : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="artistSongData">{songData?.subtitle}</p>
            </Link>
          )}

          <p className="artistSongText">
            {artistId
              ? artistData?.artists[artistId]?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader
