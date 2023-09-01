const Mock = require('mockjs')
Mock.mock('/getData', 'post', () => {
  return {
    code: '1',
    age: 99999
  }
})
