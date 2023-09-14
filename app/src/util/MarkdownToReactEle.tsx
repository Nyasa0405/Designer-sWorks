import rehypeStringify from 'rehype-stringify'
import gfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString();
};