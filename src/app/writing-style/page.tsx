import React from 'react'
import SlateCard from '@/components/blocks/s-card'
import SlateGridLayout, { ColumnSize } from '@/components/blocks/s-grid-layout'
import SlateHero from '@/components/blocks/s-hero'
import SlateNav from '@/components/blocks/s-nav'
import SlateRoot from '@/components/blocks/s-root'
import SlateTextContent from '@/components/blocks/s-text-content'
import SlateAppLayout from '@/components/layouts/s-app-layout'
import SlateDesignSystemNav from '../components/nav'
import SlateBlock from '@/components/blocks/s-block'
import SlatePageContent, { SlatePageContentSection } from '../components/page-content'
import SlateDesignSystemDoDont from '../components/do-dont'

export default function SlateWritingStylePage() {
  return (
    <SlatePageContent
      title='Writing style'
    >
      <SlatePageContentSection
        id='basics'
        title='Basics'
      >
        <h3>Use less words</h3>
        <p>
          Between 3 and 7% of people have dyslexia.
          Almost 5% have a vision impairment.
          So <strong>the less they have to read,
          the better.</strong>
        </p>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              Slate uses SSR (Server-Side Rendering), which results in improved client-side performance and better SEO (Search Engine Optimization).
            </p>
          )}
          positive={(
            <p>
              Slate uses <abbr title='Server-Side Rendering'>SSR</abbr>. This improves client-side performance and <abbr title='Search Engine Optimization'>SEO</abbr>.
            </p>
          )}
        />

        <h3>Use simple words</h3>
        <p>
          Over half of adults in the
          United States have a reading
          ability below 6th grade.
          Also, 14% can't perform
          everyday reading tasks.
        </p>
        <p>
          Because of this, you should
          prefer words that are {' '}
          <strong>short</strong> and {' '}
          <strong>common</strong>.
        </p>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              Lowering lexical difficulty, i.e. using a more accessible vocabulary, improves retention and decreases cognitive load.
            </p>
          )}
          positive={(
            <p>
              Using simple words makes things easier to understand and remember.
            </p>
          )}
        />
        <p>Some helpful resources:</p>
        <ul>
          <li>
            <a
              href='https://simple.wikipedia.org/wiki/Basic_English'
              target='_blank'
            >Basic English system</a>
          </li>
          <li>
            <a
              href='https://www.textcompare.org/readability/flesch-kincaid-reading-ease'
              target='_blank'
            >Reading ease calculator</a>
          </li>
        </ul>

        <h3>Break up sentences</h3>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              Slate uses SSR, also known as server-side rendering, which results in better client-side performance.
            </p>
          )}
          positive={(
            <p>
              Slate uses server-side rendering (SSR). This improves client-side performance.
            </p>
          )}
        />

        <h3>Use lists</h3>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              Small business websites are vehicles for customer acquisition, service, and recruitment.
            </p>
          )}
          positive={(
            <>
              <p>
                Websites for small businesses are vehicles for:
              </p>
              <ul>
                <li>customer acquisition</li>
                <li>customer service</li>
                <li>recruitment</li>
              </ul>
            </>
          )}
        />
      </SlatePageContentSection>
      <SlatePageContentSection
        id='voice-and-tone'
        title='Voice and tone'
        description={
          <>
            Slate is named after my cat.
            Cats are <strong>elegant</strong>{' '}
            animals with <strong>stubborn</strong>{' '}
            minds. {' '}
            Your writing should be{' '}
            <strong>like a cat.</strong>
          </>
        }
      >
        <h3>Write in absolutes</h3>
        <p>
          Make <strong>clear-cut
          statements</strong>.
          Avoid nuance and exceptions.
        </p>
        <p>
          Nuance makes your words less impactful. Exceptions add clutter.
        </p>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              It's usually better to wrap text content in a SlateTextContent component for better formatting.
            </p>
          )}
          positive={(
            <p>
              For proper formatting, wrap all long-form text content in a SlateTextContent component.
            </p>
          )}
        />

        <h3>Be rigorous</h3>
        <p>
          Bold statements require strong evidence.
          The things you say should be backed
          by logic, data, and good sources.
        </p>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              You should make buttons
              small to save space.
            </p>
          )}
          positive={(
            <p>
              Over half of all web traffic
              comes from mobile devices.
              To make buttons easy to
              hit on these devices, the
              buttons need to be large.
            </p>
          )}
        />

        <h3>Avoid ambiguity</h3>
        <SlateDesignSystemDoDont
          negative={(
            <p>
              We make small business websites.
            </p>
          )}
          positive={(
            <p>
              We make websites for small businesses.
            </p>
          )}
        />
      </SlatePageContentSection>
    </SlatePageContent>
  )
}
