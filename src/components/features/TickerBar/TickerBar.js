import React from 'react'
import Ticker from 'react-ticker'

const TickerBar = () => {
  return (
    <div style={{ backgroundColor: "#FAF9F6", border: '1px solid black', padding: "0.5rem", whiteSpace: "nowrap"}}>
      <Ticker>
      {() => (
        <a href='/' style={{ paddingRight: "4em", color: "black" }}>
          20% off for Students†
        </a>
      )}
    </Ticker>
  </div>
  )
}

export default TickerBar
