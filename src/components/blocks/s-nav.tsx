import React, { PropsWithChildren } from 'react'
import styles from './s-nav.module.css'
import SlateBlock, { SlateBlockProps } from './s-block'
import CommonBlockProps from '../mixins/common-block-props'

export interface SlateNavProps
extends SlateBlockProps, PropsWithChildren {
  compact?: boolean
  ariaLabel: string
  header?: React.ReactElement
}

export default function SlateNav(
  props: SlateNavProps
) {
  const {
    children,
    compact,
  } = props

  const classNames: string[] = props.classNames || []
  classNames.push(styles.nav)

  if (!!compact) {
    classNames.push(styles.compact)
  }

  const blockProps: CommonBlockProps = {
    ...props,
    classNames,
    ariaRole: 'navigation',
  }

  return (
    <SlateBlock
      {...blockProps}
    >
      {children}
    </SlateBlock>
  )
}