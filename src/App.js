import React, { Component } from 'react'
import CustomComponent from './components/CustomComponent'

class App extends Component {
    render() {
        return (
            <div style = { styles.wrapper }>
              <CustomComponent />
            </div>
          )
    }
}

const styles = {
    'wrapper': {
        display:  'flex',
    }
}

export default App