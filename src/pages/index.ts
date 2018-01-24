import wepy from 'wepy'
import A from '../components/a'
import B from '../components/b'
import AModel from '../components/AModel'

export default class index extends wepy.page {
    config = {
      navigationBarTitleText: 'Repeat1'
    }
    components = {
        A: A,
        B: B
    }


    data = {
       aModel: new AModel()
    }

    

    onLoad() {
      
    }
  }