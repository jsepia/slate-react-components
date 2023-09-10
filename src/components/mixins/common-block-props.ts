import { AriaRole, CSSProperties } from "react"

export default interface CommonBlockProps {
  align?: 'left' | 'center' | 'right'
  ariaRole?: AriaRole
  ariaLabel?: string
  className?: string
  classNames?: string[]
  colorPalette?: 'primary' | 'secondary' | 'tertiary' | 'inverted' | string
  padded?: boolean
  responsivePadding?: boolean
  withBackground?: boolean
  style?: CSSProperties
}
