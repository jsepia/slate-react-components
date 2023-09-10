import React, { PropsWithChildren } from 'react'
import styles from './s-card.module.css'
import CommonBlockProps from '../mixins/common-block-props'
import SlateBlock from './s-block'

export interface SlateCardProps
extends CommonBlockProps, PropsWithChildren {
  header?: React.ReactNode
  sections?: React.ReactNode[]
  footer?: React.ReactNode
  noGutters?: boolean
}

export default function SlateCard(
  props: SlateCardProps
) {
  const {
    header,
    sections,
    footer,
    noGutters,
    children,
  } = props

  const classNames: string[] = props.classNames || []
  classNames.push(styles.card)

  let { padded } = props
  if (!!noGutters) {
    padded = false
  }
  else if (typeof padded === 'undefined') {
    padded = true
  }

  const blockProps: CommonBlockProps = {
    ...props,
    padded,
    classNames,
  }

  return (
    <SlateBlock
      {...blockProps}
      classNames={classNames}
    >
      {
        header ? (
          <header className={styles.heroHeader}>
            {header}
          </header>
        ) : null
      }
      {
        sections || children
      }
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