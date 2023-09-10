import React, { PropsWithChildren } from 'react'
import styles from './s-app-layout.module.css'
import CommonBlockProps from '../mixins/common-block-props'
import SlateBlock from '../blocks/s-block'

export interface SlateAppLayoutProps
extends CommonBlockProps, PropsWithChildren {
  nav?: React.ReactElement
  sidebar?: React.ReactElement
  main?: React.ReactElement
  fixedPosition?: boolean
}

export default function SlateAppLayout(
  props: SlateAppLayoutProps
) {
  const {
    nav,
    sidebar,
    main,
    children,
    fixedPosition
  } = props

  const classNames: string[] = props.classNames || []
  classNames.push(styles.appLayout)

  if (fixedPosition) {
    classNames.push(styles.fixedPosition)
  }

  const blockProps: CommonBlockProps = {
    ...props,
    classNames,
  }

  return (
    <SlateBlock
      {...blockProps}
      classNames={classNames}
    >
      {
        nav ? (
          <div className={styles.appLayoutNav}>
            {nav}
          </div>
        ) : null
      }
      {
        sidebar ? (
          <div className={styles.appLayoutSidebar}>
            {sidebar}
          </div>
        ) : null
      }
      <main className={styles.appLayoutMain}>
        {
          main || children
        }
      </main>
    </SlateBlock>
  )
}