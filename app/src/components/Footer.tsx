import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Footer = () => {
  const auth = useAuth();
  return (
    <footer>
      <Link to="/admin">Admin</Link>
      {auth.isAuthenticated && (
        <button onClick={() => auth.signOut()}>ログアウト</button>
      )}
    </footer>
  );
};
export default Footer;
