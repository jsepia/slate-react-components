export enum SlateDesignSystemNavPage {
  HOME = 'home',
  FUNDAMENTALS = 'fundamentals',
  WRITING_STYLE = 'writing-style',
  DEMO = 'demo',
}

export const PAGE_NAMES: Record<
  SlateDesignSystemNavPage,
  string
> = {
  [SlateDesignSystemNavPage.HOME]: 'Home',
  [SlateDesignSystemNavPage.FUNDAMENTALS]: 'Fundamentals',
  [SlateDesignSystemNavPage.WRITING_STYLE]: 'Writing style',
  [SlateDesignSystemNavPage.DEMO]: 'Demo'
}
