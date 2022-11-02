import React from 'react'

const Title = () => {
    console.log("rendening title")
  return (
    <div>
      <h2>
        useCallback hook
      </h2>
    </div>
  )
}

export default React.memo(Title)
