import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'tailwindcss'
import './main.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes/index.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
