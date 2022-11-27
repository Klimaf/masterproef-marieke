import Link from "next/link";

export default function Nav() {
  return (
    <nav className="">
      <div className="w-5/6 mx-auto border-2 border-transparent border-b-uz-blue">
        <ul className="text-xl font-roboto text-uz-blue flex flex-wrap flex-col items-center m-2 lg:m-0 lg:flex-row lg:justify-around lg:h-[10vh]">
          <li className="m-3 lg:my-0">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="m-3 lg:my-0">
            <Link href={"/voor-de-kinesitherapeut"}>
              Voor de kinesitherapeut
            </Link>
          </li>
          <li className="m-3 lg:my-0">
            <Link href={"/voor-de-patient"}>Voor de patiënt</Link>
          </li>
          <li className="m-3 lg:my-0">
            <Link href={"/handleiding"}>Handleiding</Link>
          </li>
          <li className="m-3 lg:my-0">
            <Link href={"/exercises"}>Videobibliotheek</Link>
          </li>
          <li className="m-3 lg:my-0">
            <Link href={"/hydrotherapie"}>Hydrotherapie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
