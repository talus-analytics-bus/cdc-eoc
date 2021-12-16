import React from 'react'

import ExpandingSection from '../ExpandingSection/ExpandingSection'
import * as styles from './Category.module.scss'

const Category = props => {
  let children = React.Children.toArray(props.children)
  const [expanderOpen, setExpanderOpen] = React.useState()

  const iconStyle = {
    transform: expanderOpen ? 'scale(1, -1)' : 'scale(1, 1)',
  }

  console.log(iconStyle)

  return (
    <section className={styles.main}>
      <ExpandingSection
        open={expanderOpen}
        onOpen={() => setExpanderOpen(true)}
        onClose={() => setExpanderOpen(false)}
      >
        <div className={styles.firstSection}>
          <>{children[0]}</>
          <span className={styles.buttonIcon} style={iconStyle}></span>
        </div>
        <>{children.slice(1)}</>
      </ExpandingSection>
    </section>
  )
}

export default Category
