const { fetch: originalFetch } = window

window.fetch = async (...args) => {
  const [resource, config] = args

  const response = await originalFetch(resource, config)

  if (!response.ok && response.status === 401) {
    window.location.href = '/login'
  }

  return response
}
