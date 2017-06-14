import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../reducers/demo'
class Demo extends Component {
    constructor(props){
        super(props)
    }
    
    render () {
        
        return(
            <div>
                123
            </div>
        )
    }
}
// 获取state中的list值
const getData = state => {
    return {
        list: state.demo.demo
    }
}
const getMethod = dispatch => {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}
// 利用connect将组件与Redux绑定起来
export default connect(getData,getMethod)(Demo)