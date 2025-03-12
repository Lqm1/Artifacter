export const folder = {
  data: 'genshin/.data/',
  text: 'genshin/.text/',
  dist: 'genshin/',
}

/**
 * 待機
 * @param {number} ms milliseconds
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
