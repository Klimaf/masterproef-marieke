import { useQuery } from "urql";
import { EXERCISE_QUERY } from "../lib/query";
import Exercise from "../components/Exercise";
import { useState } from "react";

export default function Exercieses() {
  //FILTER STATE
  const [filter, setFilter] = useState([]);

  //FETCH DATA
  const [results] = useQuery({ query: EXERCISE_QUERY });
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

  const exercises = data.exercises.data;
  console.log(exercises);
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

  const updateFilter = (option) => {
    if (!filter.includes(option))
      setFilter((filterOptions) => [...filterOptions, option]);
    else setFilter(filter.filter((i) => i !== option));
  };

  //FILTER OPTIONS
  const filterTags_template = [
    ["preoperatief", "direct postoperatief", "postoperatief", "onderhoudsfase"],
    ["steunen", "niet steunen"],
    ["abductie", "geen abductie"],
  ];

  let filterTags = [];
  filterTags[0] = filterTags_template[0];

  //PRIME FILTER
  let filtered = exercises;

  console.log(exercises);

  //APPLY FILTER
  if (!filter.length == 0) {
    filtered = exercises.filter((ex) =>
      filter.every((f) => ex.attributes.tagArray.includes(f))
    );

    if (
      filter.includes("postoperatief") ||
      filter.includes("steunen") ||
      filter.includes("niet steunen") ||
      filter.includes("abductie") ||
      filter.includes("geen abductie")
    ) {
      filterTags[1] = filterTags_template[1];
      if (
        filter.includes("steunen") ||
        filter.includes("niet steunen") ||
        filter.includes("abductie") ||
        filter.includes("geen abductie")
      )
        filterTags[2] = filterTags_template[2];
    }
  }

  return (
    <>
      <section className="mx-auto w-5/6">
        <h1 className="pt-5 mb-3 text-2xl font-roboto text-uz-grey">Filter</h1>
        {filterTags.map((options) => (
          <ul className="flex flex-wrap" key={options}>
            {options.map((option) => (
              <div
                className={`m-1 py-1 px-3 font-semibold cursor-pointer font-ubuntu border-uz-blue border-2 
              ${
                filter.includes(option)
                  ? "text-white bg-uz-blue"
                  : "text-uz-blue hover:bg-uz-blue hover:text-white"
              }
              `}
                key={option}
                onClick={() => updateFilter(option)}
              >
                {option}
              </div>
            ))}
          </ul>
        ))}
      </section>
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
