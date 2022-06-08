import React, { PureComponent } from 'react'
import ListenMouseMoves from './ListenMouseMoves'


const pointer = mouse => (
  <div className='pointer' style={{
    left: mouse.x - 25,
    top: mouse.y - 25
  }}></div>
)

const tips = mouse => (
  <>
    <div>x:{mouse.x}</div>
    <div>y:{mouse.y}</div>
  </>
)
export default class Test extends PureComponent {
  render() {
    return (
      <>
        <ListenMouseMoves render={pointer} />
        <ListenMouseMoves render={tips} />
      </>
    )
  }
}

