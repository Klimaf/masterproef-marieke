import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import { Ubuntu, Roboto } from "@next/font/google";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "500",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={(ubuntu.variable, roboto.variable)}>
      <Provider value={client}>
        <Nav></Nav>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}

export default MyApp;
