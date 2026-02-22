import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appstore.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './components/Body.jsx';
import WatchPage from './components/WatchPage.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>

      },{
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
     <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
   
  </StrictMode>,
)
