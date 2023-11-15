import './App.css'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Root from './Root'
import About from './pages/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<About />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App


export const Home = () => {
  return (
    <div>
      Home section
    </div>
  )
}