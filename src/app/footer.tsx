import React from 'react'
import SlateBlock, { SlateBlockProps } from "@/components/blocks/s-block";
import { PAGE_NAMES, SlateDesignSystemNavPage } from "./pages";
import SlateNav from "@/components/blocks/s-nav";
import SlateCard from "@/components/blocks/s-card";

export interface FooterProps
extends SlateBlockProps {
  prev?: SlateDesignSystemNavPage
  next?: SlateDesignSystemNavPage
}

interface LinkForPageProps {
  page: SlateDesignSystemNavPage
}

function LinkForPage({
  page
}: LinkForPageProps) {
  const name = PAGE_NAMES[page]
  const uri = (
    page === SlateDesignSystemNavPage.HOME ?
    '' :
    page
  )
  const href = `/slate-design-system/${uri}`
  return (
    <a
      href={href}
    >{name}</a>
  )
}

export default function SlateDesignSystemFooter({
  prev,
  next
}: FooterProps) {
  return (
    <SlateCard>
      <SlateNav
        ariaLabel='Previous/next'
        compact
      >
        <ul>
          {
            prev ? (
              <li>
                <LinkForPage page={prev}/>
              </li>
            ) : null
          }
        </ul>
        <ul>
          {
            next ? (
              <li>
                <LinkForPage page={next}/>
              </li>
            ) : null
          }
        </ul>
      </SlateNav>
    </SlateCard>
  )
}