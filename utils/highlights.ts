import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md'
import { IHighlight } from '~/types';

const postsDirectory = path.join(process.cwd(), 'highlights');

export function getSortedHighlights() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { metadata, content } = parseMD(fileContents)

    return { metadata, content } as IHighlight
  });

  return allPostsData.sort((a, b) => a.metadata.date < b.metadata.date ? 1 : -1);
}

export function getLastHighlight() {
  return getSortedHighlights()[0];
}