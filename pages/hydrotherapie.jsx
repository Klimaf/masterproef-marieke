import { useQuery } from "urql";
import { EXERCISE_QUERY } from "../lib/query";
import Exercise from "../components/Exercise";
import { useState } from "react";
import Head from "next/head";

import exercises_JSON from "../public/exercises.json";

export default function Exercieses() {
  //FILTER STATE
  const [filter, setFilter] = useState([]);

  //FETCH DATA
  // const [results] = useQuery({ query: EXERCISE_QUERY });
  // const { data, fetching, error } = results;

  // //CHECK DATA
  // if (fetching)
  //   return (
  //     <p className="mx-auto w-5/6 pt-5 mb-3 text-2xl font-roboto text-uz-grey">
  //       Loading ...
  //     </p>
  //   );
  // if (error)
  //   return (
  //     <p className="mx-auto w-5/6 pt-5 mb-3 text-2xl font-roboto text-uz-grey">
  //       Error: {error.message}
  //     </p>
  //   );

  // const exercises = data.exercises.data;
  const exercises = exercises_JSON;
  // console.log(exercises);
  // SORT BY EXERCISE NUMBER
  exercises.sort(
    (a, b) =>
      a.attributes.title.split(":")[0].split("Oefening ")[1] -
      b.attributes.title.split(":")[0].split("Oefening ")[1]
  );

  //SORT TAGS TO TAGARRAY
  exercises.map(
    (exercise) =>
      (exercise.attributes.tagArray = exercise.attributes.tags
        .split(",")
        .map((t) => t.trim())
        .sort())
  );

  //PRIME FILTER
  let filtered = exercises.filter((ex) =>
    ex.attributes.tagArray.includes("hydrotherapie")
  );
  // console.log(exercises);

  return (
    <>
      <Head>
        <title>Hydrotherapie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mx-auto w-5/6">
        <h1 className=" pt-5 mb-3 text-2xl font-roboto text-uz-grey">
          Oefeningen <span className="text-gray-400">({filtered.length})</span>
        </h1>
        <div className="flex flex-col gap-1">
          {filtered.map((exercise) => (
            <Exercise exercise={exercise} key={exercise.attributes.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
