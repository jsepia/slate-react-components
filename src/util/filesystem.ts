import { glob, GlobOptionsWithFileTypesFalse } from 'glob'
import { join, parse, ParsedPath } from 'path'

export async function traverseDir(
  dir: string,
  globPattern?: string | string[]
): Promise<string[]> {
  const pattern = globPattern || '**/*'
  const opts: GlobOptionsWithFileTypesFalse = {
    cwd: dir
  }
  return await glob(
    pattern,
    opts
  )
}

export function removeExtension(
  path: string
): string {
  const parsedPath: ParsedPath = parse(path)
  return join(parsedPath.dir, parsedPath.name)
}
