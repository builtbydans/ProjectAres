import React from 'react'
import Ticker from 'react-ticker'

const TickerBar = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "1rem", whiteSpace: "nowrap"}}>
      <Ticker>
      {() => (
        <a href='/' style={{ paddingRight: "4em", color: "white" }}>
          20% off for Students*
        </a>
      )}
    </Ticker>
  </div>
  )
}

export default TickerBar
