import React, { PropsWithChildren } from 'react'
import styles from './s-text-content.module.css'
import CommonBlockProps from '../mixins/common-block-props'
import SlateBlock from './s-block'

export interface SlateTextContentProps
extends CommonBlockProps, PropsWithChildren {
  header?: React.ReactNode
  sections?: React.ReactNode[]
  footer?: React.ReactNode
  noGutters?: boolean
  fullWidth?: boolean
}


export default function SlateTextContent(
  props: SlateTextContentProps
) {
  const {
    fullWidth,
    noGutters,
    children,
  } = props

  const classNames: string[] = props.classNames || []
  classNames.push(styles.textContent)

  if (!fullWidth) {
    classNames.push(styles.restrictWidthForReadability)
  }

  // intercept padding settings
  let { padded, responsivePadding } = props
  if (!!noGutters) {
    padded = false
    responsivePadding = false
  }
  else if (typeof padded === 'undefined') {
    padded = true
    responsivePadding = true
  }

  const blockProps: CommonBlockProps = {
    ...props,
    padded,
    responsivePadding,
    classNames,
  }

  return (
    <SlateBlock
      {...blockProps}
      classNames={classNames}
    >
      { children }
    </SlateBlock>
  )
}
