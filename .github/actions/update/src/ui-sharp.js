import fs from 'node:fs'
import sharp from 'sharp'
import { folder } from './utils.js'

export const uiSharp = async () => {
  await createWebp()
  await createMinAvatar()
  await createMinImage()
  //await otherSharp()
}

const createWebp = async () => {
  const uiFiles = fs
    .readdirSync(folder.ui)
    .map(e => e.slice(0, -4))
    .filter(e => {
      if (e.startsWith('UI_AvatarIcon_Side_')) return true
      if (e.startsWith('UI_AvatarIcon_') || e.startsWith('UI_ItemIcon_')) return false
      return true
    })
  const webpFiles = fs.readdirSync(folder.webp).map(e => e.slice(0, -5))
  const diffFiles = uiFiles.filter(e => webpFiles.indexOf(e) === -1)
  if (!diffFiles[0]) return
  await Promise.all(
    diffFiles.map(name =>
      sharp(`${folder.ui + name}.png`)
        .webp({ lossless: true })
        .toFile(`${folder.webp + name}.webp`),
    ),
  )
}

const createMinAvatar = async () => {
  const icons = JSON.parse(fs.readFileSync(`${folder.dist}avatar.json`, 'utf8')).map(e => `UI_AvatarIcon_${e.key}`)
  await Promise.all(
    minDiff(icons).map(name =>
      sharp(`${folder.ui + name}.png`)
        .resize(256)
        .extract({ left: 32, top: 2, width: 192, height: 192 })
        .webp()
        .toFile(`${folder.webp}Min_${name}.webp`),
    ),
  )
}

const createMinImage = async () => {
  const weapons = JSON.parse(fs.readFileSync(`${folder.dist}weapon.json`, 'utf8')).map(e => e.icon)
  const materials = JSON.parse(fs.readFileSync(`${folder.dist}material.json`, 'utf8')).map(e => e.icon)
  const circles = Object.values(JSON.parse(fs.readFileSync(`${folder.dist}profile-picture.json`, 'utf8')))
  await Promise.all(
    minDiff([...weapons, ...materials, ...circles]).map(name =>
      sharp(`${folder.ui + name}.png`)
        .resize({height: 128})
        .webp()
        .toFile(`${folder.webp}Min_${name}.webp`),
    ),
  )
}

/**
 * @param {string[]} names
 * @returns {string[]}
 */
const minDiff = names => {
  const downloadedFiles = fs
    .readdirSync(folder.ui)
    .map(e => e.slice(0, -4))
    .filter(e => names.includes(e))
  const sharpedFiles = fs
    .readdirSync(folder.webp)
    .map(e => e.slice(4, -5))
    .filter(e => names.includes(e))
  return downloadedFiles.filter(e => sharpedFiles.indexOf(e) === -1)
}

const otherSharp = async () => {
  const imgFolder = 'src/game/card-assets/'
  const imgDist = 'public/images/card-assets/'
  const imgFiles = fs.readdirSync(imgFolder).map(e => e.slice(0, -4))
  await Promise.all(
    imgFiles.map(name =>
      sharp(`${imgFolder + name}.png`)
        .webp({ lossless: true })
        .toFile(`${imgDist + name}.webp`),
    ),
  )
}
