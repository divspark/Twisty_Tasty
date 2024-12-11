import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import { MealProvider } from './context/mealContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </StrictMode>
);
