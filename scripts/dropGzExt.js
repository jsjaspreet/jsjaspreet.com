const { readdirSync, renameSync } = require('fs')
const DIST = './dist'

const distFiles = readdirSync(DIST).filter(file => !file.endsWith("jpg"))

for (const distFile of distFiles) {
  const newFileName = distFile.split("").slice(0, -3).join("")
  renameSync(`${DIST}/${distFile}`, `${DIST}/${newFileName}`)
}
