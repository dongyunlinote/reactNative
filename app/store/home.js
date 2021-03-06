import {observable,computed,action,makeAutoObservable} from 'mobx'

export default class HomeStore {
    constructor() {
        makeAutoObservable(this)
    }

    @observable num = 3 ;
    @observable amount = 5 ;


    @computed total() {
        return this.num * this.amount;
    }


    @action
    plus = (v)=>{
        
         this.num += 1
    }

    
}

export const homeStore = new HomeStore()