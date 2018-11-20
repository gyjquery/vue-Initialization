/*
 使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import msite from './msite.json'


Mock.mock('/headCateList', msite)
