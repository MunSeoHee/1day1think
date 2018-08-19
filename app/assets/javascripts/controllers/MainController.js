import FormView from '../views/FormView.js'
import TabView from '../views/TabView.js'
import View from '../views/View.js'

const tag = '[MainController]'

export default {
  init() {
    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onChangeTab(e.detail.tabName))
    
    
    this.selectedTab = '긍정'
    this.renderView()
    
  },
  renderView() {
    console.log(tag, 'rednerView()')
    TabView.setActiveTab(this.selectedTab)

    if (this.selectedTab === '긍정') {
      document.getElementById('pro').style.display = ''
      document.getElementById('neu').style.display = 'none'
      document.getElementById('cons').style.display = 'none'
    } else if (this.selectedTab === '중립') {
      document.getElementById('pro').style.display = 'none'
      document.getElementById('neu').style.display = ''
      document.getElementById('cons').style.display = 'none'
    }else if (this.selectedTab === '부정') {
      document.getElementById('pro').style.display = 'none'
      document.getElementById('neu').style.display = 'none'
      document.getElementById('cons').style.display = ''
    }
  },
  onChangeTab(tabName) {
    this.selectedTab = tabName
    this.renderView()
  },
}