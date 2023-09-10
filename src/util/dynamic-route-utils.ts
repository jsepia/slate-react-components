// import type {
//   GetStaticPathsResult
// } from 'next'
// import type {
//   ParsedUrlQuery
// } from 'querystring'
// import { stat, readFile } from 'fs/promises'
// import { join, resolve } from 'path'
// import { removeExtension, traverseDir } from '@/util/filesystem'
// import {
//   CompileMDXResult,
//   compileMDX
// } from 'next-mdx-remote/rsc'
// import type {
//   MDXProvider
// } from '@mdx-js/react'
// import { FrontmatterAttributes } from '@/config/front-matter'
// import MDImage from '../components/primitives/md-image'
// import { CONTENT_BASE, resolveContentPath } from './path-utils'

// export const DOCUMENT_EXTENSIONS = ['md', 'mdx']
// export const CONTENT_FILTER = `*.{${DOCUMENT_EXTENSIONS.join(',')}}`
// export const CONTENT_FILTER_RECURSIVE = `**/${CONTENT_FILTER}`

// export const COMPONENTS: MDXComponents = {
//   MDImage,
// }

// export type MDXComponents = React.ComponentProps<
//   typeof MDXProvider
// >['components']

// export type Slug = string | string[]

// export type NormalizedSlug = string[]

// export type NextJSPagePath<
//   Params extends ParsedUrlQuery
// > = (
//   string |
//   { params: Params; locale?: string }
// )

// export type CustomCompileMDXResult = (
//   CompileMDXResult<
//     FrontmatterAttributes
//   >
// )

// export type SlugParams = {
//   slug: Slug
// }

// export type PagePath = NextJSPagePath<SlugParams>

// export interface DynamicRouteProps {
//   params: {
//     slug: Slug
//   }
//   searchParams?: object
// }

// function normalizeSlug(slug: Slug): NormalizedSlug {
//   if (typeof slug === 'string') {
//     return [slug]
//   }
//   else {
//     return slug
//   }
// }

// function createPathFromSlug(slug: string): PagePath {
//   return {
//     params: {
//       slug
//     }
//   }
// }

// function createPathFromSlugRecursive(slug: Slug): PagePath {
//   const nSlug = normalizeSlug(slug)
//   return {
//     params: {
//       slug: nSlug
//     }
//   }
// }

// /**
//  * Crawls a directory of .md/.mdx
//  * files and returns the corresponding
//  * static paths in the format expected
//  * by Next.js's getStaticPaths
//  * function.
//  * 
//  * When using Next.js's dynamic routing
//  * functionality, this function allows
//  * you to generate a static page for
//  * each md/mdx file in a given directory.
//  * 
//  * By default, this function assumes
//  * your dynamic route is a subfolder
//  * named [slug]. But if you want to
//  * create routes recursively (with
//  * `recursive = true`) you need to
//  * follow the "catch-all segments"
//  * naming convention instead, which is
//  * [...slug] or [[...slug]].
//  * 
//  * For more information, see:
//  * https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
//  * 
//  * @param srcDir the source directory relative to `CONTENT_BASE`
//  * @param recursive set this to true if your route uses c
//  * @returns 
//  */
// export async function generateStaticPathsFromContentDir(
//   srcDir: string,
//   recursive?: boolean
// ): Promise<GetStaticPathsResult> {
//   const resolvedDir = resolve(
//     CONTENT_BASE,
//     srcDir
//   )

//   console.log(`- Traversing content directory ${resolvedDir}`)

//   // find all applicable documents
//   let documents: string[] = await traverseDir(
//     resolvedDir,
//     (
//       recursive ?
//       CONTENT_FILTER_RECURSIVE :
//       CONTENT_FILTER
//     )
//   )
//   documents = documents.map(removeExtension)
//   documents.forEach((document: string) => {
//     console.log(`  - ${document}`)
//   })

//   // convert to page paths
//   const paths = (
//     recursive ? (
//       documents.map(
//         createPathFromSlugRecursive
//       )
//     ) : (
//       documents.map(
//         createPathFromSlug
//       )
//     )
//   )

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function loadDocumentFromSlug(
//   slug: Slug,
//   contentDir: string
// ): Promise<CustomCompileMDXResult> {
//   const documentSubPath = (
//     typeof slug === 'string' ?
//     slug :
//     slug.join('/')
//   )
//   const documentPath = join(
//     contentDir,
//     documentSubPath
//   )

//   const result = await renderDocument(
//     documentPath
//   )

//   return result
// }

// /**
//  * Renders a Markdown document to a
//  * React component, and also extracts
//  * the front matter.
//  * 
//  * @param path the path to the document, relative to CONTENT_BASE
//  */
// export async function renderDocument(
//   path: string
// ): Promise<CustomCompileMDXResult> {
//   // we don't have the original file's
//   // extension so we're just going to
//   // try every supported extension
//   let actualFilePath = ''
//   for (let i = 0; i < DOCUMENT_EXTENSIONS.length; i++) {
//     const ext = DOCUMENT_EXTENSIONS[i]
//     const filename = `${path}.${ext}`
//     const filePath = resolveContentPath(filename)
//     try {
//       const stats = await stat(
//         filePath
//       )
//       if (stats && stats.isFile()) {
//         actualFilePath = filePath
//         break
//       }
//     } catch(e) {}
//   }

//   if (!actualFilePath) {
//     throw new Error(`Could not find a supported document file type with path ${path} at ${CONTENT_BASE}`)
//   }

//   console.log(`- Rendering document ${path} from ${actualFilePath}`)
//   const source = await readFile(
//     actualFilePath,
//     {
//       encoding: 'utf-8',
//     }
//   )

//   return await compileMDX({
//     source,
//     options: {
//       scope: {
//         foo: 'bar',
//       },
//       parseFrontmatter: true,
//     },
//     components: COMPONENTS,
//   })
// }
