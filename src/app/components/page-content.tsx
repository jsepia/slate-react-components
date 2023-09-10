import React, { PropsWithChildren } from 'react'
import SlateCard from '@/components/blocks/s-card'
import SlateHero from '@/components/blocks/s-hero'
import SlateTextContent from '@/components/blocks/s-text-content'

import styles from './page-content.module.css'

export interface SlatePageContentSectionProps extends PropsWithChildren {
  id: string
  title: React.ReactNode
  description?: React.ReactNode
}

export interface SlatePageContentProps extends PropsWithChildren {
  title: React.ReactNode
}

export function SlatePageContentSection({
  id,
  title,
  description,
  children
}: SlatePageContentSectionProps) {
  return (
    <>
      <SlateCard
        colorPalette='secondary'
        noGutters
      >
        <SlateTextContent>
          <h2 id={id}>{title}</h2>
          {
            description ? (
              <p>{description}</p>
            ) : null
          }
        </SlateTextContent>
      </SlateCard>
      <SlateCard
        colorPalette='primary'
        noGutters
      >
        <SlateTextContent>
          {children}
        </SlateTextContent>
      </SlateCard>
    </>
  )
}

export default function SlatePageContent({
  title,
  children,
}: SlatePageContentProps) {
  return (
    <>
      <SlateHero
        colorPalette='tertiary'
      >
        <SlateTextContent
          className={styles.pageContentHeader}
        >
          <h1>{title}</h1>
        </SlateTextContent>
      </SlateHero>
      {children}
    </>
  )
}
