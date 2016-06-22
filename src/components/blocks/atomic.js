import React from 'react'
import { Entity } from 'draft-js'

export default (props) => {
  const entity = Entity.get(props.block.getEntityAt(0))
  const data = entity.getData()
  const type = entity.getType()

  if (type === 'IMAGE') {
    return (
      <div className="block-atomic-wrapper">
        <img src={data.src} role="presentation" />
        <div className="block-atomic-controls">
          <button>&times;</button>
        </div>
      </div>
    )
  }

  if (type === 'YOUTUBE') {
    const youtubeRegexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/ // eslint-disable-line no-useless-escape
    const match = data.src.match(youtubeRegexp)

    if (match && match[2].length === 11) {
      return (
        <iframe
          width="560"
          height="315"
          src={`//www.youtube.com/embed/${match[2]}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )
    }

    return <p>Unsupported URL format for {type}</p>
  }

  return <p>No supported block for {type}</p>
}
