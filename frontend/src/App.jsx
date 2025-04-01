import { Routes, Route } from 'react-router-dom';
import Page from './pages/Page';

function App() {
  return (
    <Routes>
      <Route path="/:slug" element={<Page />} />
      <Route path="*" element={<div className="p-6">404 Not Found</div>} />
    </Routes>
  );
}

export default App;
