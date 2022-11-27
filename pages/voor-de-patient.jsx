import Head from "next/head";
import { useQuery } from "urql";
import { GET_VDP } from "../lib/query";

export default function Home() {
  //FETCH DATA
  const [results] = useQuery({
    query: GET_VDP,
  });

  const { data, fetching, error } = results;

  //CHECK DATA
  if (fetching)
    return (
      <p className="mx-auto w-5/6 pt-5 mb-3 text-2xl font-roboto text-uz-grey">
        Loading ...
      </p>
    );
  if (error)
    return (
      <p className="mx-auto w-5/6 pt-5 mb-3 text-2xl font-roboto text-uz-grey">
        Error: {error.message}
      </p>
    );
  const text = data.voorDePatient.data.attributes.text;

  const formatted = text.split(/\r?\n/).map((l) => {
    let form = <p className="mb-3 text-uz-grey">{l}</p>;
    if (l.includes("# ")) {
      form = (
        <h1 className="mb-3 text-xl font-roboto text-uz-blue">
          {l.replaceAll("# ", "")}
        </h1>
      );
    }
    if (l.includes("## ")) {
      form = (
        <h1 className="mb-3 text-xl font-roboto text-uz-grey">
          {l.replaceAll("## ", "")}
        </h1>
      );
    }
    return form;
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-5/6 mt-5 font-ubuntu text-lg">{formatted}</div>
    </div>
  );
}
