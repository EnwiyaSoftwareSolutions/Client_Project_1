export const getApiBaseUrl = () => {
  const endpointUrl = process.env.NEXT_PUBLIC_ENDPOINT_URL

  if (!endpointUrl) {
    throw new Error("NEXT_PUBLIC_ENDPOINT_URL is not set")
  }

  return endpointUrl
}