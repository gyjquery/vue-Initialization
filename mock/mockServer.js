/*
 使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import msite from './msite.json'
import apiList from '../src/api/apiList'
Mock.mock(apiList.todayHourGraphData, msite)
