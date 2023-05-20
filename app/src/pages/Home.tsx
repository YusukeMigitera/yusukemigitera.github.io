import { useAuth } from "../hooks/use-auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Home = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <main>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a
              href="https://github.com/YusukeMigitera"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/YusukeMigitera"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};
