import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetail from './Components/CardDetail'
import Cards from './Components/Cards'

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/detail/:detailId" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App