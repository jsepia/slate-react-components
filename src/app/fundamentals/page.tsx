import React from 'react'
import SlatePageContent, { SlatePageContentSection } from '../components/page-content'

export default function SlateFundamentalsPage() {
  return (
    <SlatePageContent
      title='Fundamentals'
    >
      <SlatePageContentSection
        id='design-priorities'
        title='Design priorities'
        description={
          <>
            Design is about{' '}
            <strong>solving problems</strong>.
            This involves <strong>tradeoffs</strong>.
            Making the right tradeoffs requires{' '}
            <strong>clear priorities</strong>.
          </>
        }
      >
        <h3>Artistic expression</h3>
        <p>
          <strong>Slate is for artists.</strong>
        </p>
        <p>
          Artists like these things:
        </p>
        <ul>
          <li>background textures</li>
          <li>multiple color palettes</li>
          <li>customizable colors (through CSS variables)</li>
          <li>customizable fonts</li>
        </ul>
        <h3>Skim-friendly</h3>
        <p>
          <strong>Web users don't read;
            they skim.</strong>
        </p>
        <p>
          Slate expects you to use{' '}
          <strong>short, simple sentences</strong>.
          Because of this, the base font
          size is larger.
        </p>
        <blockquote>
          less text + larger font = easier to read
        </blockquote>
        <h3>Materials, not colors</h3>
        <p>(not yet implemented)</p>
        <p>
          Slate uses modern CSS techniques to incorporate
          light, shadows, and textures, into your designs.
        </p>
      </SlatePageContentSection>
      <SlatePageContentSection
        id='implementation-priorities'
        title='Implementation priorities'
      >
        <h3>Server-side rendered</h3>
        <p>
          The component system is designed
          for <strong>static sites</strong>.
          Benefits:
        </p>
        <ul>
          <li>
            Rendering performance doesn't
            matter, so you can have lots of
            logic in the components.
          </li>
          <li>
            Slate components work with
            JavaScript disabled. This allows for a better
            user experience for security-conscious
            NoScript users.
          </li>
        </ul>
        <p>
          Downside: No micro-interactions
          allowed.
        </p>
        <h3>Strong typing &gt; CSS classes</h3>
        <p>
          "Opinionated" has become a buzzword.
          The key to making a good opinionated
          framework is to make it <em>easy</em>{' '}
          to do things idiomatically.
        </p>
        <p>
          This framework does not expose{' '}
          <em>any</em> CSS classes. It uses React
          components with TypeScript types. In a
          modern IDE with autocomplete, this makes
          it easy to pass the correct attributes
          and values to the components.
        </p>
        <h3>Separation of content</h3>
        <p>
          Slate containers come in two types: layout
          blocks and text blocks.
        </p>
        <p>
          Longform text content goes into{' '}
          <code>&lt;SlateTextContent/&gt;</code>.
          Text in this component has
          proper margins and spacing.
        </p>
        <p>
          Outside of{' '}
          <code>&lt;SlateTextContent/&gt;</code>,
          spacing is tighter and optimized for
          structural layouts like navs.
        </p>
        <p>
          You can nest structural blocks into text blocks
          and vice versa.
        </p>
      </SlatePageContentSection>
    </SlatePageContent>
  )
}
