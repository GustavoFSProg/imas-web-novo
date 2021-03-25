import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './pages/Header'
import App from './App'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
