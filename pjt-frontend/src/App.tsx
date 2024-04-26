import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/Board/List";
import Detail from "./pages/Board/Detail";
import Write from "./pages/Board/Write";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "board", element: <List /> },
  { path: "board/write", element: <Write /> },
  { path: "board/:boardId", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
