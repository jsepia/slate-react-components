import React, { CSSProperties, PropsWithChildren } from 'react'
import styles from './s-grid-layout.module.css'
import SlateBlock, { SlateBlockProps } from './s-block'
import CommonBlockProps from '../mixins/common-block-props'

export type ColumnSize = number | 'auto' | 'min-content' | 'max-content'

export interface SlateGridLayoutProps
extends CommonBlockProps, PropsWithChildren {
  columnSizes?: ColumnSize[]
  columns: React.ReactNode[]
  gutters?: boolean
}

export default function SlateGridLayout(
  props: SlateGridLayoutProps
) {
  const {
    columns,
    gutters
  } = props

  const columnSizes = props.columnSizes || [1]

  const classNames = [styles.gridLayout]
  if (!!gutters) {
    classNames.push(styles.withGutters)
  }

  const gridColumns: string[] = columnSizes.map(
    (size: ColumnSize) => {
      if (typeof size === 'number') {
        return `${size}fr`
      }
      else {
        return size
      }
    }
  )
  const style: CSSProperties = {
    ...(props.style || {}),
    gridAutoColumns: gridColumns.join(' ')
  }

  const blockProps: SlateBlockProps = {
    ...props,
    classNames,
    style,
  }
  
  return (
    <SlateBlock
      {
        ...blockProps
      }
    >
      {columns}
    </SlateBlock>
  )
}