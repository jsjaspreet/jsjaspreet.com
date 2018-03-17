import database from './db.json'
import { generateAdditionalFields } from './helpers'

const PAGE_SIZE = 10

const db = {
  getPage(pageNumber) {
    const startIndex = PAGE_SIZE * pageNumber
    const rawMemes = database.reverse().slice(startIndex, startIndex + PAGE_SIZE)

    // Generate additional fields from raw data
    return rawMemes.map(rawMeme => {
      const additionalFields = generateAdditionalFields(rawMeme.imageId)
      return {
        ...rawMeme,
        ...additionalFields
      }
    })
  },
  getTotalPages() {
    return Math.ceil(database.length / PAGE_SIZE)
  }
}

export default db
