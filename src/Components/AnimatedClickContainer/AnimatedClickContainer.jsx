import React from 'react';

import './styles.css';
const OFFSET = window.innerWidth > 480 ? 20 : 50
const ANIMATION_DURATION = 300
const ClickAnimation = (props) => {
  const { clickCoordinates } = props
  const { x = 0, y = 0 } = clickCoordinates
  const left = x - OFFSET
  const top = y - OFFSET

  return (
    <div className='click-animation' style={{ left, top }} />
  )
}

const AnimatedClickContainer = (props) => {
  const { children } = props;
  // for mouse clicks
  const [isMouseClicked, toggleIsMouseClicked] = React.useState(false)
  const [clickCoordinates, updateClickCoordinates] = React.useState({ x: 0, y: 0 })

  // for touches
  const [isTouchPointerAvailable, toggleIsTouchPointerAvailable] = React.useState(false)
  const [touchesList, setTouchesList] = React.useState([])

  let containerRef = React.createRef();

  // handlers for mouse click
  const onClick = (e) => {
    const { nativeEvent } = e
    updateClickCoordinates({ x: nativeEvent.clientX, y: nativeEvent.clientY })
    toggleIsMouseClicked(true)
    setTimeout(() => toggleIsMouseClicked(false), ANIMATION_DURATION)
  }
  const mouseMoveHandler = function mouseHandler(e) {
    updateClickCoordinates({ x: e.clientX, y: e.clientY })
  }
  const onMouseDown = (e) => {
    const { nativeEvent } = e
    // console.log('nativeEvent', e.nativeEvent)
    updateClickCoordinates({ x: nativeEvent.clientX, y: nativeEvent.clientY })
    toggleIsMouseClicked(true)
    containerRef.current.addEventListener('mousemove', mouseMoveHandler, true)
  }
  const onMouseUp = (e) => {
    updateClickCoordinates(false)
    containerRef.current.addEventListener('mousemove', mouseMoveHandler, true)
  }

  // handlers for touches
  const onTouchStart = (e) => {
    const { nativeEvent } = e
    setTouchesList(Object.values(nativeEvent.touches))
    toggleIsTouchPointerAvailable(true)
  }
  const onTouchEnd = (e) => {
    toggleIsTouchPointerAvailable(false)
    setTouchesList([])
  }
  const onTouchMove = (e) => {
    setTouchesList(Object.values(e.nativeEvent.touches))
  }

  return (
    <div
      ref={containerRef}

      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}

      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className='animated-click-container'
    >
      {/* show the click point animation */}
      {isMouseClicked && <ClickAnimation clickCoordinates={clickCoordinates} />}

      {/* show the touch points */}
      {isTouchPointerAvailable && touchesList.map((touch) => <ClickAnimation clickCoordinates={{ x: touch.clientX, y: touch.clientY }} />)}

      {/* the wrapped children components */}
      {children}
    </div>
  )
}

export default AnimatedClickContainer;