import Link from "next/link";

export default function Nav() {
  return (
    <nav className="">
      <div className="w-5/6 mx-auto">
        <ul className="flex flex-wrap justify-around items-center h-[10vh] border-2 border-transparent border-b-uz-blue text-xl font-roboto text-uz-blue">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={""}>Voor De Kinesitherapeut</Link>
          </li>
          <li>
            <Link href={""}>Voor De Patient</Link>
          </li>
          <li>
            <Link href={"/exercises"}>Handleiding & Videobibliotheek</Link>
          </li>
          <li>
            <Link href={""}>Hydrotherapie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
