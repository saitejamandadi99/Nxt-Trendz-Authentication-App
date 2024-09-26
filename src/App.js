import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route component={NotFound} />
  </Switch>
)

export default App
