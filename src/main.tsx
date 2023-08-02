import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Layout } from "./layout/Layout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Layout>
      <App />
    </Layout>
  </>
);
