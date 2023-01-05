import { Link } from 'react-router-dom'
import './App.css'
import IconVaadinPassword from '~icons/vaadin/password'

function App() {
  return <><Link className="flex items-center" to={{ pathname: '/password-generate' }}><IconVaadinPassword className="mr-2"/>Password Generator</Link></>
}

export default App
