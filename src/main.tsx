import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux'
import store from './store/index.ts'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
