import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ListRepo from "./pages/Listofrepo"
import ViewRepo from "./pages/Viewrepo"
import ErrorPage from "./pages/404Page"
import ErrorBoundaries from "./pages/ErrorBoundary"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Listofrepo" element={<ListRepo />} />
      <Route path="/Viewrepo" element={<ViewRepo />} />
      <Route path="/errorBoundary" element={<ErrorBoundaries />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
