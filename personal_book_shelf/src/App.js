import './App.css';
import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './Pages/HomePage';
import BookShelfPage from './Pages/BookShelfPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/bookshelf',
    element: <BookShelfPage />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;