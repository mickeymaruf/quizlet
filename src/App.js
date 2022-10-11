import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Root from './layouts/Root';
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import TakeQuiz from './components/TakeQuiz';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home /> },
      { path: 'quiz/:id', loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), element: <TakeQuiz /> },
      { path: 'statistics', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statistics /> },
      { path: 'blog', element: <Blog /> },
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
