import React, { PropsWithChildren } from 'react'
import styles from './s-hero.module.css'
import CommonBlockProps from '../mixins/common-block-props'
import SlateBlock from './s-block'

export interface SlateHeroProps
extends CommonBlockProps, PropsWithChildren {
  title?: React.ReactElement
  header?: React.ReactElement
  footer?: React.ReactElement
}

export default function SlateHero(
  props: SlateHeroProps
) {
  const {
    header,
    footer,
    children
  } = props

  const classNames: string[] = props.classNames || []
  classNames.push(styles.hero)

  const blockProps: CommonBlockProps = {
    ...props,
    classNames,
  }
  
  return (
    <SlateBlock
      {...blockProps}
    >
      {
        header ? (
          <header className={styles.heroHeader}>
            {header}
          </header>
        ) : null
      }
      <div className='body'>{children}</div>
      {
        footer ? (
          <footer className={styles.heroFooter}>
            {footer}
          </footer>
        ) : null
      }
    </SlateBlock>
  )
}