/*
 * @Author: bettermu 
 * @Date: 2018-05-08 21:29:46 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 14:32:46
 * 根组件
 */
import React from 'react'
import HeaderBar from 'components/HeaderBar'
import FooterBar from 'components/FooterBar'

const mainStyles={
  width:'100%',
  height:'calc(100%-1rem)'
}


class App extends React.Component {
  render() {
    return (
      <div id="container">
        <HeaderBar />
        <main style={mainStyles}>
          {this.props.children}
        </main>
        <FooterBar/>
      </div>
    )
  }
}

export default App
