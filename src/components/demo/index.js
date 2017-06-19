import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../reducers/demo'
import { BrowserRouter as Router , Route , Switch , Redirect , Link } from 'react-router-dom';
import { Button } from 'antd-mobile/lib/button';


class Nav extends Component {
  render() {
    return (
      <div>
        <p><Link to="/">Root</Link></p>
        <p><Link to="/demo">demo</Link></p>
      </div>
    );
  }
}

class Demo extends Component {
    constructor(props){
        super(props)
    }

    // async componentWillMount() {
    //     const { history } = this.props;

    //     const rsp = await fetch('https://cnodejs.org/api/v1/topics');

    //     const data = await rsp.json();
    //     if(data){
    //         // history.replace({ pathname: '/index' })
    //     }
    // }

    componentDidMount() {
        this.props.action.fetchData()
    }
    
    render () {
        
        return(
            <div>
                <Nav/>
                {console.log(this.props)}
                <Button>按钮</Button>
            </div>
        )
    }
}
// 获取state中的list值
const getData = state => {
    return {
        list: state.get('demo').get('demo').toJS()
    }
}
const getMethod = dispatch => {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}
// 利用connect将组件与Redux绑定起来
export default connect(getData,getMethod)(Demo)