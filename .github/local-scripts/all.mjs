// update action ローカル実行用
import { dataDownload } from '../actions/update/src/data-download.js'
import { dataShrink } from '../actions/update/src/data-shrink.js'

const update = async () => {
  await dataDownload()
  dataShrink()
}
await update()
