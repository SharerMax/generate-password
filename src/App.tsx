import { useEffect, useState } from 'react'
import type { GenerateOptions } from 'generate-password-browser'
import passwordGenerator from 'generate-password-browser'
import ClipboardJS from 'clipboard'

import './App.css'

function App() {
  const [password, setPassword] = useState(passwordGenerator.generate())
  const [generateOptions, setGenerateOptions] = useState<GenerateOptions>({
    length: 12,
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
  })
  useEffect(() => {
    const clipboard = new ClipboardJS('#copy-btn')
    return function cleanup() {
      clipboard.destroy()
    }
  })

  function handleCheckBoxChange(id: keyof GenerateOptions) {
    const newOptions = { ...generateOptions, [id]: !generateOptions[id] }
    if (newOptions.numbers || newOptions.symbols || newOptions.lowercase || newOptions.uppercase)
      setGenerateOptions(newOptions)
  }

  return (
    <div className="App">
      <h1>Generate Password</h1>
      <strong className="text-6 break-words" id="password">{password}</strong>
      <div className="mt-4 space-x-2">
        <button onClick={() => setPassword(passwordGenerator.generate(generateOptions))}>Generate</button>
        <button id="copy-btn" data-clipboard-target="#password">Copy</button>
      </div>
      <fieldset className="text-left mt-4">
        <legend>Generate Options</legend>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <input type="checkbox" id="symbols" onChange={() => handleCheckBoxChange('symbols')} checked={!!generateOptions.symbols}></input>
            <label htmlFor="symbols" className="ml-2">Symbols</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="numbers" onChange={() => handleCheckBoxChange('numbers')} checked={generateOptions.numbers}></input>
            <label htmlFor="numbers" className="ml-2">Numbers</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="lowercase" onChange={() => handleCheckBoxChange('lowercase')} checked={generateOptions.lowercase}></input>
            <label htmlFor="lowercase" className="ml-2">Lowercase</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="uppercase" onChange={() => handleCheckBoxChange('uppercase')} checked={generateOptions.uppercase}></input>
            <label htmlFor="uppercase" className="ml-2">Uppercase</label>
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="length" >Length</label>
          <input className="ml-2" type="number" id="length" value={generateOptions.length} onChange={event => setGenerateOptions(options => ({ ...options, length: +event.target.value }))} />
        </div>
      </fieldset>
    </div>
  )
}

export default App
