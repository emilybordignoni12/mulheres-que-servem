const allowed = new Set(['utm_source','utm_medium','utm_campaign','utm_term','utm_content','src','sck','s1','s2','s3'])

export function buildCheckoutUrl(baseUrl, search = '') {
  const destination = new URL(baseUrl)
  const source = new URLSearchParams(search.replace(/^\?/, ''))
  source.forEach((value, key) => {
    if (allowed.has(key) && value) destination.searchParams.set(key, value)
  })
  return destination.toString()
}
