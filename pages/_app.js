import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
        <Nav />
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </main>
  );
}

export default MyApp;
