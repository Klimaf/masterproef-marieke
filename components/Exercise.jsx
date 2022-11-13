import Link from "next/link";

export default function Exercise({ exercise }) {
  const { title, tags, slug, tagArray } = exercise.attributes;
  return (
    <Link href={`/exercises/${slug}`}>
      <div className="bg-white px-2 py-3 my-2 flex flex-col justify-between gap-2 border-gray-200 border shadow-md">
        <h2 className="text-xl ml-1 font-roboto text-uz-grey">{title}</h2>
        <div className=" flex flex-wrap gap-2">
          {tagArray.map((tag) => (
            <div
              className="bg-uz-blue m-1 py-1 px-3 text-white font-ubuntu"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
