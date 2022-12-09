import React from 'react'
import { Link } from 'react-router-dom'
import DetailsHeaderStyle from './DetailsHeader.module.css'

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className={DetailsHeaderStyle.detailsHeader}>
      <div className={DetailsHeaderStyle.profiles} />

      <div className={DetailsHeaderStyle.artistProfile}>
        <img
          alt="profile"
          src={
            artistId
              ? artistData.data[0].attributes.artwork.url
              : songData?.images?.coverart
          }
          className={DetailsHeaderStyle.artistImage}
        />

        <div className={DetailsHeaderStyle.artistData}>
          <p className={DetailsHeaderStyle.artistSongData}>
            {artistId ? artistData?.data[0]?.attributes?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className={DetailsHeaderStyle.artistSongData}>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className={DetailsHeaderStyle.artistSongText}>
            {artistId
              ? artistData?.data[0]?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader
