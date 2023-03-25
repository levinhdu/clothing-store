import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routers";
import DefauLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefauLayout
                    children={<Page id={route.id} />}
                    titleHeader={route.title}
                  />
                }
              ></Route>
            );
          })}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
