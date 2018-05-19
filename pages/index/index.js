const locationData = require('./location.js')

Page({
  data: {
    searchText: '2222',
    data: locationData
  },
  searchInput (event) {
    this.setData({
      searchText: event.detail.value
    })
  },
  search () {
    this.setData({
      data: filterData(this.data.searchText)
    })
  },
  gotoMap (event) {
    const dataset = event.target.dataset
    wx.openLocation({
      latitude: dataset.latitude,
      longitude: dataset.longitude,
      scale: 15
    })
  }
})

function filterData (condition) {
  if (!condition) return locationData

  const reg = new RegExp(condition)
  return locationData.filter(function (cur) {
    return reg.test(cur.name)
  })
}
