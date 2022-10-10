import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Root from './layouts/Root';
import Statistics from './components/Statistics'
import Blog from './components/Blog'

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      {path: '/', element: <Home />},
      {path: 'home', element: <Home />},
      {path: 'statistics', element: <Statistics />},
      {path: 'blog', element: <Blog />},
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
