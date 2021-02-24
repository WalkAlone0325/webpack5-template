import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import Store from './store'
import App from './App.jsx'

const About = () => {
  return <>About</>
}

ReactDOM.render(
  <Provider store={Store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" exact component={App}></Route>
      <Route path="/about" exact component={About}></Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
// ReactDOM.render(<App />, document.getElementById('root'))

// const root = document.getElementById('root')
// root.append('react')
