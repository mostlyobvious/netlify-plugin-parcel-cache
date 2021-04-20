const PARCEL_CACHE = '.cache'

module.exports = {
  async onPreBuild({ utils: { cache } }) {
    await cache.restore(PARCEL_CACHE)
  },
  async onPostBuild({ utils: { cache } }) {
    await cache.save(PARCEL_CACHE)
  },
}
