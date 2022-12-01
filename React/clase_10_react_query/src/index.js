import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClientProvider, QueryClient } from 'react-query';

// Global Options
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 3000,
//       cacheTime: 5000,
//     },
//   },
// });

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
