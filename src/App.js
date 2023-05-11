import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
