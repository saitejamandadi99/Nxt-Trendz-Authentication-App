import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Header />
    <Route component={NotFound} />
  </Switch>
)

export default App
