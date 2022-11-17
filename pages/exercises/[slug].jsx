import { useQuery } from "urql";
import { GET_EXERCISE_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

export default function ExerciseDetails() {
  //Fetch Slug
  const { query } = useRouter();
  //FETCH DATA
  const [results] = useQuery({
    query: GET_EXERCISE_QUERY,
    variables: { slug: query.slug },
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

  const { title, urlVideo, instruction, tags, images } =
    data.exercises.data[0].attributes;

  //SORT TAGS TO TAGARRAY
  const tagArray = tags
    .split(",")
    .map((t) => t.trim())
    .sort();

  let displayImages = [];
  images.data.map(
    (img) =>
      (displayImages = [...displayImages, img.attributes.formats.large.url])
  );

  return (
    <section className="pt-5">
      <div className="w-5/6 mx-auto">
        <h2 className="text-2xl mb-5 font-roboto text-uz-grey">{title}</h2>
        <div className="mb-5 flex flex-wrap gap-2">
          {tagArray.map((tag) => (
            <div
              className="bg-uz-blue py-1 px-3 whitespace-nowrap text-white font-ubuntu"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-5">
          <iframe
            className="aspect-video w-full bg-uz-blue mb-5"
            src={urlVideo}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mb-5 font-ubuntu text-lg">{instruction}</p>
        </div>
      </div>
      <div className="w-5/6 mx-auto grid lg:grid-cols-2 gap-5 xl:grid-cols-3">
        {displayImages.map((di, id) => (
          <div key={id}>
            <h3 className="text-lg font-roboto text-uz-grey">Foto {id + 1}</h3>
            <img src={di} className=""></img>
          </div>
        ))}
      </div>
    </section>
  );
}
