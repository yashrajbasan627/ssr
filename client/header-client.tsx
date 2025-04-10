export {}; // � important!
import { hydrateRoot } from "react-dom/client";
import { Header } from "./components/Header";

hydrateRoot(document.getElementById("header")!, <Header />);
