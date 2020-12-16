import {observable, action,makeAutoObservable} from 'mobx'

export default class HomeStore {
    constructor() {
        makeAutoObservable(this)
    }

    @observable num = 0 ;


    @action
    plus = (v)=>{
        
         this.num += 1
    }

    
}

export const homeStore = new HomeStore()