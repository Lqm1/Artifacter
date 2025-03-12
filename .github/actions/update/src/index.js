import { dataDownload } from './data-download.js'
import { dataShrink } from './data-shrink.js'

const update = async () => {
  await dataDownload()
  dataShrink()
}
await update()
