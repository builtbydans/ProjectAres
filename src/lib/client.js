import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '7ubqefkj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-04-20',
  token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
