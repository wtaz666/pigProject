import { areaData } from '../services/example'
export default {
    namespace:'listStore',
    state:{
        arr:[]
    },
    subscriptions:{
      setup({dispatch,history}){
          
      }
    },
    effects:{
        *getData({payload},{call,put}){
            let firstData = yield call(areaData)
            yield put({type:'saveName',payload:firstData})
        }
    },
    reducers:{
        saveName(state,action){
          return {...state,arr:action.payload}
        }
    }
}