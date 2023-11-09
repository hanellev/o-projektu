import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Link,
} from 'react-router-dom';
import './global.css';

const App = () => {
	return (
		<div className="container">
			<h1>Our Project</h1>
			<nav>
				<Link to="/home">HomePage</Link>
				<span> | </span>
				<Link to="/about">About</Link>
				<span> | </span>
				<Link to="/contact">Contact</Link>
				<span> | </span>
			</nav>
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);

createRoot(document.querySelector('#app')).render(
	<RouterProvider router={router} />
);
