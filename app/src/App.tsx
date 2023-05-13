import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/use-auth';

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
