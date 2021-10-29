import React, { useState, useRef, Children } from 'react'

import * as styles from './ExpandBox.module.scss'

const ExpandBox = props => {
  const children = Children.toArray(props.children)
  const content = useRef()

  const [hiderStyle, setHiderStyle] = useState({ height: 0 })
  const [iconStyle, setIconStyle] = useState({ transform: 'scale(1, 1)' })

  const toggleHider = e => {
    e.preventDefault()
    if (hiderStyle.height === 0) {
      setHiderStyle({ height: content.current.offsetHeight })
      setIconStyle({ transform: 'scale(1, -1)' })
    } else {
      setHiderStyle({ height: 0 })
      setIconStyle({ transform: 'scale(1, 1)' })
    }
  }

  return (
    <section className={styles.main}>
      <button
        aria-label={'Expand Section'}
        className={styles.firstSection}
        onClick={toggleHider}
        // style={arrowStyle}
      >
        {children[0]}
        <span className={styles.buttonIcon} style={iconStyle}></span>
      </button>
      <div className={styles.hiderStyle} style={hiderStyle}>
        <div ref={content}>{children.slice(1)}</div>
      </div>
    </section>
  )
}

export default ExpandBox
