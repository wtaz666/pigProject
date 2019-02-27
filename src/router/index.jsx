import React from 'react';
import { Router } from 'dva/router';
// 引入配置路由组件
import RouterView from './RouterView'
// 引入一级路由
import Indexpage from '../view/firstPage/firstPage'
import Work from '../view/workPage/workPage'
import Mypig from '../view/myPage/myPage'

// 引入二级路由
import Indexsale from '../view/firstPage/indexsale'
import Indexproduct from '../view/firstPage/indexproduct'

import Schedule from '../components/workPage/schedule/schedule'
import ReportForms from '../components/workPage/reportForms/reportForms'
import Record from '../components/workPage/record/record'

import MyIndex from '../view/myPage/myIndex/myIndex'
import Message from '../view/myPage/message/message'
import SpeakThing from '../view/myPage/speakThing/speakThing'
import MessageindextOne from '../view/myPage/message/messageOne'

import Messageindex from '../view/myPage/message/messageindex'
import MessageindextSelect from '../components/MyPage/select'
import BigAssistant from '../view/myPage/bigAssistant/bigAssistant'



// 引入三级路由
import Detail from '../view/myPage/speakThing/detail/detail';
import Speakindex from '../view/myPage/speakThing/speakindex';


// 引入三级路由

// 路由配置信息
let config = {
  routes: [{
    path: '/indexpage',
    component: Indexpage
  }, {
    path: '/mypage',
    component: Mypig,
    children: [{
      path: '/mypage/myindex',
      component: MyIndex
    }, {
      path: '/mypage/bigAssistant',
      component: BigAssistant,
      children: [{
        path: '/mypage/bigAssistant/speakindex',
        component: Speakindex,
      },{
        path: '/mypage/bigAssistant/detail',
        component: Detail,
      },{
        path: '/mypage/bigAssistant',
        redirect: '/mypage/bigAssistant/speakindex'
      }]
    }, {
      path: '/mypage/message',
      component: Message,
      children:[{
        path:'/mypage/message/messageindex',
        component:Messageindex
      },{
        path:'/mypage/message/messageOne',
        component:MessageindextOne
      },   
      {
        path:'/mypage/message/select',
        component:MessageindextSelect
      },{
        path:'/mypage/message',
        redirect:'/mypage/message/messageindex'
      }]
    }, {
      path: '/mypage/speakthing',
      component: SpeakThing,
      children: [{
        path: '/mypage/speakthing/speakindex',
        component: Speakindex,
      },{
        path: '/mypage/speakthing/detail',
        component: Detail,
      },{
        path: '/mypage/speakthing',
        redirect: '/mypage/speakthing/speakindex'
      }]
    }, {
      path: '/mypage',
      redirect: '/mypage/myindex'
    }],
  }, {
    path: '/indexsale',
    component: Indexsale
  }, {
    path: '/indexproduct',
    component: Indexproduct
  }, {
    path: '/workpage',
    component: Work,
    children: [
      {
        path: '/workpage/schedule',
        component: Schedule
      },
      {
        path: '/workpage/reportForms',
        component: ReportForms
      }, {
        path: '/workpage/record',
        component: Record
      },
      {
        path: '/workpage',
        redirect: '/workpage/schedule',
      }
    ]
  },{
    path: '*',
    redirect: '/indexpage'
  }]
}

// 导出根路由配置
export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={config.routes}></RouterView>
    </Router>
  );
}