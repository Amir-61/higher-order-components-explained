import React from 'react';

const withData = WrappedComponent => {
  class WithData extends React.Component {
    state = {
      data : []
    }
    componentDidMount() {
      fetch(this.props.dataSource)
        .then(response=> response.json())
        .then(data=>this.setState({data: data}))
    }
    render() {
      return <WrappedComponent data ={this.state.data}></WrappedComponent>
    }
  }
  return WithData
}
export default withData
