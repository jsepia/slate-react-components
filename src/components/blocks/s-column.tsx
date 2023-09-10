import React, { PropsWithChildren } from 'react'
import styles from './s-column.module.css'

export interface SlateColumnProps
extends PropsWithChildren {
  span?: 1 | 2 | 3 | 4 | 5
  align?: 'left' | 'center' | 'right'
}

export default function SlateColumn(
  {
    align,
    span,
    children
  }: SlateColumnProps
) {
  return (
    <div
      className={styles.column}
      data-align={align || 'left'}
      data-span={span || 1}
    >
      {children}
    </div>
  )
}