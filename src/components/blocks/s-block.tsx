import React, { PropsWithChildren } from 'react'
import styles from './s-block.module.css'
import colorPalettes from '../mixins/s-color-palettes.module.css'
import CommonBlockProps from '../mixins/common-block-props'

export interface SlateBlockProps
extends CommonBlockProps, PropsWithChildren {
}

export default function SlateBlock(
  {
    align,
    className,
    classNames,
    colorPalette,
    padded,
    responsivePadding,
    withBackground,
    style,
    children
  }: SlateBlockProps
) {
  if (!classNames) {
    classNames = []
  }
  classNames.push(styles.block)

  if (className) {
    classNames.push(className)
  }

  if (colorPalette) {
    classNames.push(colorPalettes[
      colorPalette
    ])
  }

  if (padded) {
    classNames.push(styles.padded)

    if (responsivePadding) {
      classNames.push(styles.responsivePadding)
    }
  }

  if (withBackground) {
    classNames.push(styles.withBackground)
  }

  return (
    <div
      className={classNames.join(' ')}
      data-align={align || 'left'}
      style={style}
    >
      {children}
    </div>
  )
}