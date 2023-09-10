import React from 'react'
import SlateRoot from "@/components/blocks/s-root"
import SlateAppLayout from "@/components/layouts/s-app-layout"
import SlateDesignSystemNav from "./components/nav"
import { SlateDesignSystemNavPage } from "./pages"
import styles from './layout.module.css'
import './globals.css'

export const metadata = {
  title: 'Slate Design System',
  description: 'A BEM design system for artists',
}

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-layout='home'>
        <SlateRoot className={styles.root}>
          <SlateAppLayout
            sidebar={
              <SlateDesignSystemNav
                current={
                  SlateDesignSystemNavPage.HOME
                }
              />
            }
          >
            {children}
          </SlateAppLayout>
        </SlateRoot>
      </body>
    </html>
  )
}
