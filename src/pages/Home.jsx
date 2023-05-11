import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const Home = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div></div>;
  }

  return (
    <>
      <header>
        <h1>Yusuke Migitera</h1>
      </header>
      <main>
        <h2>Social Media</h2>
        <ul>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </main>
      <footer>
        <Link to="/admin">Admin</Link>
        {auth.isAuthenticated && (
          <button onClick={() => auth.signOut()}>ログアウト</button>
        )}
      </footer>
    </>
  );
};
