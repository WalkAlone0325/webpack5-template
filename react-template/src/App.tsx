import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

@inject('store')
@observer
class App extends Component {
  props: any
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <div>{this.props.store.count}</div>
        <button onClick={this.props.store.add}>add</button>
        <button onClick={this.props.store.reduce}>reduce</button>
        <DatePicker />
      </div>
    )
  }
}

export default App
