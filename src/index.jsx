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

const App = () => {
	return (
		<div className="container">
			<h1>Safe Beauty</h1>
			<nav>
				<Link to="/">Home Page</Link>
				<span> | </span>
				<Link to="/project">Our Project</Link>
				<span> | </span>
				<Link to="/team">The Team</Link>
				<span> | </span>
				<Link to="/mentors">Mentors</Link>
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
	<RouterProvider router={router} />
);
