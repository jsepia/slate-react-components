import { join, resolve } from 'path'

export const CONTENT_BASE = 'src/content/'
export const EXTERNAL_IMAGES_BASE = '/images/'

/**
 * Resolves a path relative to the src/content directory
 * @param contentPath  a path relative to the src/content directory
 * @returns an absolute path
 */
export function resolveContentPath(
  contentPath: string
): string {
  const fullPath = join(
    CONTENT_BASE,
    contentPath
  )
  const resolvedPath = resolve(
    fullPath
  )
  return resolvedPath
}

/**
 * Resolves a path relative to the public/images directory
 * @param externalImagePath a path relative to the public/images directory
 * @returns an absolute path
 */
export function resolveExternalImagePath(
  externalImagePath: string
): string {
  const fullPath = join(
    EXTERNAL_IMAGES_BASE,
    externalImagePath
  )
  return fullPath
}
