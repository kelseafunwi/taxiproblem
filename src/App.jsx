import './App.css'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Root from './Root'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BookRide from './pages/BookRide'

function App() {
    const router = createBrowserRouter(
                createRoutesFromElements(
                <Route path='/' element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<About />} />
                    <Route path='/book-ride' element={<BookRide />} />
                    <Route path='/*' element={<NotFound />} />
                </Route>
                )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default App