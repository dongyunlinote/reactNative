import {observable,computed,action,makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    @observable userName = "小海豚" ;


    @computed total() {
        return this.num * this.amount;
    }


    @action
    set = (v)=>{
        
         this.userName = v
    }

    
}

export const userStore = new UserStore()