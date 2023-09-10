import React from 'react'
import SlateNav from "@/components/blocks/s-nav";
import { SlateDesignSystemNavPage } from "../pages";
import SlateTextContent from "@/components/blocks/s-text-content";
import SlateBlock from "@/components/blocks/s-block";

import styles from './nav.module.css'
import SlateCard from "@/components/blocks/s-card";
import SlateGridLayout from "@/components/blocks/s-grid-layout";

export interface SlateDesignSystemDoDontLabels {
  negative: string,
  positive: string
}

const DEFAULT_LABELS: SlateDesignSystemDoDontLabels = {
  negative: 'Bad',
  positive: 'Good'
}

export interface SlateDesignSystemDoDontProps {
  negative: React.ReactElement
  positive: React.ReactElement
  labels?: SlateDesignSystemDoDontLabels
}

export default function SlateDesignSystemDoDont(
  {
    negative,
    positive,
    labels,
  }: SlateDesignSystemDoDontProps
) {
  if (!labels) {
    labels = DEFAULT_LABELS
  }
  return (
    <SlateCard
      colorPalette='secondary'
    >
      <SlateGridLayout
        columns={[
          <SlateTextContent key='negative' noGutters>
            <p className='negative'><strong>{labels.negative}</strong></p>
            {negative}
          </SlateTextContent>,
          <SlateTextContent key='positive' noGutters>
            <p className='positive'><strong>{labels.positive}</strong></p>
            {positive}
          </SlateTextContent>,
        ]}
        gutters
      />
    </SlateCard>
  )
}
