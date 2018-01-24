import wepy from 'wepy'

export default class A extends wepy.component {

    props = {
        item:{
            id:Number,
            name:String
        }
    }
}