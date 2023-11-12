import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { HomePage } from './pages/HomePage';
import { TheTeam } from './pages/TheTeam';
import { OurProject } from './pages/OurProject';
import { Mentors } from './pages/Mentors';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from 'react-router-dom';
import './global.css';
import Navbar from './components/Navigation/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="container container-fluid">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'project',
        element: <OurProject />,
      },
      {
        path: 'team',
        element: <TheTeam />,
      },
      {
        path: 'mentors',
        element: <Mentors />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
