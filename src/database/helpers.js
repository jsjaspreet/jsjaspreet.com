const generateFullURL = (imageId) => `https://topkekkle.imgix.net/enumerated/${imageId}`

const generateThumbnailURL = (imageId) => {
  const [name, ext] = imageId.split('.')
  const thumbnailFile = `${name}-T.${ext}`
  return `https://topkekkle.imgix.net/enumerated-thumbnails/${thumbnailFile}`
}

export const generateAdditionalFields = (imageId) => {
  const thumbnailURL = generateThumbnailURL(imageId)
  const fullURL = generateFullURL(imageId)
  return {
    thumbnailURL,
    fullURL
  }
}

