import fs from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { folder, sleep } from './utils.js'

// @anonsbelle https://ambr.top
// @Algoinde https://enka.network
const ambrUrl = 'https://api.ambr.top/assets/UI/'
const enkaUrl = 'https://enka.network/ui/'

export const uiDownload = async () => {
  // Downloaded Images
  const uiFiles = fs.readdirSync(folder.ui)
  await getAvatarImages(uiFiles)
  await getWeaponImages(uiFiles)
  await getMaterialImages(uiFiles)
}

/**
 * @param {string[]} uiFiles
 */
const getAvatarImages = async uiFiles => {
  const avatars = JSON.parse(fs.readFileSync(`${folder.dist}avatar.json`, 'utf8'))
  const imageList = []
  for (const avatar of avatars) {
    const key = avatar.key
    imageList.push(`UI_AvatarIcon_${key}`)
    //imageList.push(`UI_AvatarIcon_Side_${key}`)
    //imageList.push(`UI_Gacha_AvatarImg_${key}`)
    if (avatar.costumes)
      for (const key of avatar.costumes.map(e => e.key)) {
        //imageList.push(`UI_AvatarIcon_${key}`)
        //imageList.push(`UI_AvatarIcon_Side_${key}`)
        //imageList.push(`UI_Costume_${key}`)
      }
  }
  await downloadAmbr(imageList, uiFiles)
}

const getWeaponImages = async uiFiles => {
  const imageList = JSON.parse(fs.readFileSync(`${folder.dist}weapon.json`, 'utf8')).flatMap(e => [e.icon, `${e.icon}_Awaken`])
  await downloadAmbr(imageList, uiFiles)
}

/**
 * @param {string[]} uiFiles
 */
const getMaterialImages = async uiFiles => {
  const imageList = JSON.parse(fs.readFileSync(`${folder.dist}material.json`, 'utf8')).map(e => e.icon)
  await downloadAmbr(imageList, uiFiles)
}

/**
 * @param {string[]} imageList 
 * @param {string[]} uiFiles 
 */
const downloadAmbr = async (imageList, uiFiles) => {
  const names = imageList.filter(e => e && !uiFiles.includes(`${e}.png`)).map(e => `${e}.png`)
  if (!names.length) return
  if (names.length > 100) names.length = 100
  for (const name of names) {
    const res = await fetch(ambrUrl + name)
    if (res.ok) pipeline(res.body, fs.createWriteStream(folder.ui + name))
    else console.log(`NG: ${name}`)
    await sleep(100)
  }
}
