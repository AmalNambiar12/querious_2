import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DoubtsPage from "./pages/DoubtsPage";
import ProfilePage from "./pages/ProfilePage";
import SolutionPage from "./pages/SolutionPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profilepage":
        title = "";
        metaDescription = "";
        break;
      case "/solutionpage":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DoubtsPage />} />

      <Route path="/profilepage" element={<ProfilePage />} />

      <Route path="/solutionpage" element={<SolutionPage />} />

      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
