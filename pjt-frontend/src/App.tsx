import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import Detail from "./pages/Board/Detail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "board", element: <Board /> },
  { path: "board/write", element: <Detail /> },
  { path: "board/:boardId", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
