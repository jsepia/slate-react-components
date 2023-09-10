import React from 'react'
import SlateGridLayout from '@/components/blocks/s-grid-layout'
import SlateHero from '@/components/blocks/s-hero'
import SlateTextContent from '@/components/blocks/s-text-content'
import SlateDesignSystemFooter from './footer'
import { SlateDesignSystemNavPage } from './pages'

export default function SlateDesignSystemPage() {
  return (
    <>
      <SlateHero
        colorPalette='inverted'
      >
        <SlateTextContent>
          <h1>Slate design system</h1>
        </SlateTextContent>
      </SlateHero>
      <SlateTextContent>
        <h2>Overview</h2>
        <SlateGridLayout
          gutters
          columns={[
            <div key='1'>
              <h3>Cool</h3>
              <p>Lorem ipsum dolor sit amet, proident excepteur id ea commodo amet sit non enim</p>
            </div>,
            <div key='2'>
              <h3>Nice</h3>
              <p>Lorem ipsum dolor sit amet, proident excepteur id ea commodo amet sit non enim</p>
            </div>,
            <div key='3'>
              <h3>Neat</h3>
              <p>Lorem ipsum dolor sit amet, proident excepteur id ea commodo amet sit non enim</p>
            </div>,
          ]}
        />
        <SlateDesignSystemFooter
          next={SlateDesignSystemNavPage.FUNDAMENTALS}
        />
      </SlateTextContent>
    </>
  )
}
