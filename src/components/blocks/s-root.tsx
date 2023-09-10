import React from 'react'
import { PropsWithChildren } from 'react'
import styles from './s-root.module.css'
import colorPalettes from '../mixins/s-color-palettes.module.css'

export interface SlateRootProps
extends PropsWithChildren {
  className?: string
  classNames?: string[]
  colorPalette?: 'primary' | 'secondary' | 'inverted'
}

export default function SlateRoot(
  {
    children,
    className,
    classNames,
    colorPalette
  }: SlateRootProps
) {
  if (!classNames) {
    classNames = []
  }
  classNames.push(styles.root)

  if (colorPalette) {
    classNames.push(colorPalettes[
      colorPalette
    ])
  }
  else {
    classNames.push(colorPalettes.primary)
  }

  if (className) {
    classNames.push(className)
  }
  
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}