import wepy from 'wepy'

export default class B extends wepy.component {

    props = {
        item:{
            id:Number,
            name:String
        }
    }
}