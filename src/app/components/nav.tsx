import React from 'react'
import SlateNav from "@/components/blocks/s-nav";
import { SlateDesignSystemNavPage } from "../pages";
import SlateTextContent from "@/components/blocks/s-text-content";
import SlateBlock from "@/components/blocks/s-block";

import styles from './nav.module.css'
import SlateCard from "@/components/blocks/s-card";

export interface SlateDesignSystemNavProps {
  current: SlateDesignSystemNavPage
}

interface NavItem {
  href: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  {
    href: '',
    label: 'Home',
  },
  {
    href: '/fundamentals',
    label: 'Fundamentals'
  },
  {
    href: '/writing-style',
    label: 'Writing style'
  },
  {
    href: '/demo',
    label: 'Demo'
  },
]

export default function SlateDesignSystemNav(
  {
    current
  }: SlateDesignSystemNavProps
) {
  return (
    <SlateBlock
      withBackground
      colorPalette='primary'
    >
      <SlateCard
        withBackground
        colorPalette="inverted"
        padded
        className={styles.navHeader}
      >
        <section className={styles.logoContainer}>
          <a
            href='/slate-design-system'
            className={styles.logo}
          >
            <span className={styles.wordmarkPt1}>Slate</span>{' '}
            <span className={styles.wordmarkPt2}>design</span>{' '}
            <span className={styles.wordmarkPt3}>system</span>{' '}
            <span className={styles.betaLabel}>Beta</span>
          </a>
        </section>
      </SlateCard>
      <SlateNav
        ariaLabel='Navigation'
      >
        <ul>
          {
            NAV_ITEMS.map(
              ({href, label}: NavItem, i: number) => (
                <li key={i}>
                  <a href={`${href}`}>{label}</a>
                </li>
              )
            )
          }
        </ul>
      </SlateNav>
    </SlateBlock>
  )
}
