import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Switch , Redirect , Link , withRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import 'whatwg-fetch';

let Routes = ()=>(
  <Switch>
    <Route path='/' exact render={() => (
      <Redirect to="/index"/>
    )}/>
    <Route path='/index' component={Login}/>
    <Route path='/demo' component={Enhance(Demo)}/>
    <Route render={()=>(<div>404</div>)}/>
  </Switch>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Top/>
          {/**
           * 这里可以公共的样式,比如 头部, 尾部, 等.
           */}
          { Routes() }
        </div>
      </Router>
    );
  }
}

class Top extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>导航</div>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        2
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div>
        login
      </div>
    );
  }
}

const Enhance = (BaseComponent) => {
    class Restricted extends Component {
        constructor(props){
          super(props)
          this.state = {
            load:false
          }

        }
        componentWillMount() {
            this.checkAuthentication(this.props);
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                this.checkAuthentication(nextProps);
            }
        }
        async checkAuthentication(params) {
            const { history } = params;
            const rsp = await fetch('https://cnodejs.org/api/v1/topics');

            const data = await rsp.json();

            // if(data){
            //     history.replace({ pathname: '/index' })
            // }
            // this.setState({load:true})
        }
        render() {
            if(!this.state.load){
              return <BaseComponent {...this.props} />;
            }else{
              return <div></div>
            }
        }
    }
    return withRouter(Restricted)
  }






export default App;