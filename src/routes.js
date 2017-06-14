import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
import App from './App' // 引入各容器组件
import Demo from './components/demo'

export default (
    <Route path="/" component={App}>
        {/*<IndexRoute component={login}/>*/}
        <Route path="demo" component={Demo}/>
    </Route>
)