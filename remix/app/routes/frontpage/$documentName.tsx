import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { catalogueClient } from '~/clients'
import { Products } from '~/components/products'
import {
  FrontpageDocument,
  FrontpageQuery,
} from '~/crystallize/queries/frontpage.generated'
import { normalizeDocumentNode } from '~/crystallize/utils/normalizeDocumentNode'
import { HttpCacheHeaderTagger } from '~/http-cache-header-tagger'
import { componentContent } from '../../crystallize/utils/componentContent'

export let loader: LoaderFunction = async ({ request, params }) => {
  console.log({ params })
  const url = new URL(request.url)
  // for the preview mode, if the query parameter preview=true is present, ask for the draft version
  const preview = url.searchParams.get('preview')
  const version = preview ? 'draft' : 'published'
  const path = `/frontpage/${params.documentName}`
  const catalogueUrl = process.env.CATALOGUE_API_URL
  const client = catalogueClient(catalogueUrl)
  const data = await client.request<FrontpageQuery>(
    normalizeDocumentNode(FrontpageDocument),
    { path, version },
  )

  return json(
    { ...data, path },
    HttpCacheHeaderTagger('30s', '1w', [
      'books',
      'frontpage-' + params.documentName,
    ]),
  )
}

export function headers() {
  return HttpCacheHeaderTagger('1m', '1w', ['index']).headers
}

// export let meta: MetaFunction = ({ data }) => {
//   let {
//     catalogue: { meta },
//   } = data
//   let metaData = componentContent(meta.content, 'ContentChunkContent').chunks[0]
//   const description = `${
//     componentContent(metaData[1].content, 'RichTextContent').plainText[0]
//   }`
//   return {
//     title: `${componentContent(metaData[0].content, 'SingleLineContent').text}`,
//     description,
//     'og:image': `${
//       componentContent(metaData[2].content, 'ImageContent')?.images[0]?.url
//     }`,
//     'og:description': description,
//   }
// }

export default function Index() {
  let { catalogue } = useLoaderData()
  return (
    <div>
      <Products products={books} />
    </div>
  )
}
