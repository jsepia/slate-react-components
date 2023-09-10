import SlateCard from '@/components/blocks/s-card'
import SlateGridLayout, { ColumnSize } from '@/components/blocks/s-grid-layout'
import SlateNav from '@/components/blocks/s-nav'
import SlateTextContent from '@/components/blocks/s-text-content'
import React from 'react'
import SlatePageContent, { SlatePageContentSection } from '../components/page-content'

const LIPSUM = `
Lorem ipsum dolor sit amet, dolor adipis
icing enim consectetur anim nostrud mollit
duis nulla excepteur deserunt consequat
nisi magna commodo eu elit deserunt. 
Deserunt ut et qui culpa laborum magna
sint aute. Ipsum officia ipsum duis non
voluptate laborum sunt commodo duis dolor
voluptate est. Sint culpa anim esse ex 
dolore anim aliquip voluptate quis id
fugiat duis deserunt. Tempor elit est et
do anim consequat in consequat elit commo
do consectetur incididunt.
`.trim()

interface SampleNavProps {
  compact?: boolean
}

function SampleNav({compact}: SampleNavProps) {
  return (
    <SlateNav
      ariaLabel='Navigation'
      compact={compact}
    >
      <ul>
        <li>
          <h1>Title</h1>
        </li>
        <li>
          <span>Label</span>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
      </ul>
      <ul>
        <li>
          <span>Label</span>
        </li>
        <li>
          <button>Button</button>
        </li>
      </ul>
    </SlateNav>
  )
}

interface SampleGridProps {
  numColumns: number
  columnSizes: ColumnSize[]
}

function SampleGrid({
  numColumns,
  columnSizes
}: SampleGridProps) {
  const columns: React.ReactElement[] = []
  for (let i = 0; i < numColumns; i++) {
    columns.push(
      <SlateCard
        key={i}
        colorPalette='inverted'
      >{i + 1}</SlateCard>
    )
  }
  return (
    <SlateGridLayout
      columnSizes={columnSizes}
      gutters
      columns={columns}
    ></SlateGridLayout>
  )
}

function DemoTextContent() {
  return (
    <SlateTextContent>
      <h1>Heading 1</h1>
      <p>{LIPSUM}</p>
      <h2>Heading 2</h2>
      <p>{LIPSUM}</p>
      <h3>Heading 3</h3>
      <p>{LIPSUM}</p>
      <h4>Heading 4</h4>
      <p>{LIPSUM}</p>
      <blockquote>
        Incididunt sint occaecat culpa dolor
        dolor laborum quis velit laboris sunt
        exercitation excepteur ea. Velit excepteur
        tempor laboris voluptate aliqua pariatur
        labore proident ex magna dolore laborum
        aute ipsum. Non consequat deserunt
        irure adipisicing excepteur pariatur et
        qui duis ut nostrud et excepteur sint
        consectetur. In sit minim commodo pariatur
        occaecat minim ullamco duis duis magna
        ullamco aliquip mollit cillum Lorem.
      </blockquote>
      <h5>Heading 5</h5>
      <p>{LIPSUM}</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
      </ul>
      <p>{LIPSUM}</p>
      <ol>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
        <li>
          Lorem ipsum dolor sit amet, pariatur occ
          aecat amet ex amet irure esse ullamco ut
          duis
        </li>
      </ol>
    </SlateTextContent>
  )
}

export default function SlateDemoPage() {
  return (
    <SlatePageContent
      title='Demo'
    >
      <SlatePageContentSection
        id='grid'
        title='Grid'
      >
        <SampleGrid
          numColumns={5}
          columnSizes={[0.2]}
        />
      </SlatePageContentSection>
      <SlatePageContentSection
        id='nav'
        title='Nav'
      >
        <h3>Normal</h3>
        <SampleNav/>
        <h3>Compact</h3>
        <SampleNav compact />
      </SlatePageContentSection>
      <SlatePageContentSection
        id='text-content'
        title='Text content'
      >
        <SlateCard
          colorPalette='inverted'
        >
          <DemoTextContent/>
        </SlateCard>
        <SlateCard
          colorPalette='secondary'
        >
          <DemoTextContent/>
        </SlateCard>
        <SlateCard
          colorPalette='primary'
        >
          <DemoTextContent/>
        </SlateCard>
      </SlatePageContentSection>
    </SlatePageContent>
  )
}
