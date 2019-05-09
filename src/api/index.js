import ajax from './request'
import apiList from './apiList'
export const reqSendCode = (data) => ajax(apiList.todayHourGraphData,data,'POST')
export const newDatas = (data) => ajax(apiList.newData,data,'POST')
