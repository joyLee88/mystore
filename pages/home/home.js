Page({
  data: {
    // imageWidth: wx.getSystemInfoSync().windowWidth,
    bannerList: [
      '../../image/2.jpg',
      '../../image/1.jpg',
      '../../image/3.jpg',
      '../../image/4.jpg',
      '../../image/5.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    container: null,
    discountInfo: [
      {
        img: '../../image/2.jpg',
        href: 'www.baidu.com',
        name: '津尔氏补水抗氧化',
        nowvalue: '￥39.9',
        originvalue: '￥159'
      }, {
        img: '../../image/3.jpg',
        href: 'www.baidu.com',
        name: '高蛋白芝士鸡肉条',
        nowvalue: '￥44.3',
        originvalue: '￥79'
      }, {
        img: '../../image/4.jpg',
        href: 'www.baidu.com',
        name: '个护/口腔50元优惠券',
        nowvalue: '￥1',
        originvalue: '￥50'
      }
    ]
  },
  onLoad() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#container'),
      search: this.search.bind(this)
    });
    // 获取banner宽度
    // const query = wx.createSelectorQuery();
    // const that = this;
    // query.select('.banners').boundingClientRect((rect => {
    //   that.setData({
    //     imageWidth: rect.width
    //   })
    // }))
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
  },
  selectResult: function (e) {
      console.log('select result', e.detail)
  },
})