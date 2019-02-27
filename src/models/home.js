import { areaData, zhexianData, zhuxingData } from '../services/api'
export default {

  namespace: 'homeStore',

  state: {
    AreaData:[], // 工作页-常规记录
    zheData: [], // 折线图
    zxData: [] // 柱形图
  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },

  effects: {
    * getAreaData({ payload }, { call, put }) {
      let AreaDatas = yield call(areaData);
      yield put({type: 'save', payload: AreaDatas});
    },
    * getzheData({ payload }, { call, put }) {
      let zheData = yield call(zhexianData);
      yield put({type: 'savezheData', payload: zheData});
    },
    * getzxData({ payload }, { call, put }) {
      let zxDatas = yield call(zhuxingData);
      yield put({type: 'saveZxData', payload: zxDatas});
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        AreaData: action.payload
      };
    },
    savezheData(state, action) {
      return {
        ...state,
        zheData: action.payload
      };
    },
    saveZxData(state, action) {
      return {
        ...state,
        zxData: action.payload
      };
    }
  }

};
