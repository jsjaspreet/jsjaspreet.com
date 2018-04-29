import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../../../../components/index'

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "third-year-lessons" */ './component'),
  loading: Loading,
})

class Route extends Component {
  render() {
    return <LoadableComponent {...this.props} />
  }
}

export default Route