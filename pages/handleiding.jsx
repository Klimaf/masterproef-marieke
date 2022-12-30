import Head from "next/head";
import Image from "next/image";
import HL1 from "../public/HL/HL1.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Handleiding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-5/6 mt-5 font-ubuntu text-lg">
        <h1 className="mb-3 text-xl font-roboto text-uz-blue">
          Handleiding bij de videobibliotheek
        </h1>
        <p className="mb-3 text-uz-grey">
          Op de startpagina van de website ziet u verschillende knoppen. Onder
          de knop{" "}
          <strong>
            “<u>Home</u>”
          </strong>{" "}
          vindt u wat uitleg over wie wij zijn en wat het doel is van deze
          website. Onder de knop{" "}
          <strong>
            “<u>Handleiding</u>”
          </strong>
          , waar u zich nu bevindt, vindt u uitleg over het gebruik van de
          website, hoe de website is opgebouwd en een lijst met oefeningen die
          zijn opgenomen in de videobibliotheek. Onder de knop{" "}
          <strong>
            “<u>Voor de kinesitherapeut</u>”
          </strong>{" "}
          vindt de kinesist algemene richtlijnen en richtlijnen specifiek per
          doelstelling van de verschillende oefeningen. Onder de knop{" "}
          <strong>
            “<u>Voor de patiënt</u>”
          </strong>{" "}
          vindt u voor de patiënt aangepaste algemene en specifieke richtlijnen.
          Het is belangrijk deze richtlijnen te lezen alvorens de website te
          gebruiken. Onder de knop{" "}
          <strong>
            “<u>Videobibliotheek</u>”
          </strong>{" "}
          vindt u alle video’s van de oefeningen met bijhorende uitleg en
          foto’s. Tot slot is er een aparte knop voor de video’s gefilmd in
          hydrotherapie, dit vindt u onder{" "}
          <strong>
            “<u>Hydrotherapie</u>”
          </strong>
          . In wat volgt wordt meer uitleg gegeven over de opbouw en structuur
          van deze videobibliotheek.{" "}
        </p>
        <p className="text-uz-grey">
          De videobibliotheek omvat oefeningen die gebruikt kunnen worden in
          elke fase van de revalidatie. De oefeningen zijn divers en zijn
          gericht op:{" "}
        </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>Pijndemping en circulatiebevordering</li>
          <li>Mobiliteit</li>
          <li>Motorische controle</li>
          <li>Spierkracht met inbegrip van core stability</li>
          <li>Lenigheid</li>
          <li>Evenwicht</li>
          <li>Functionele oefeningen met inbegrip van gangrevalidatie</li>
        </ul>
        <p className="mb-3 text-uz-grey">
          Zoals vermeld is er voor elke soort oefening een richtlijn. Het is van
          belang deze door te nemen alvorens de oefeningen mee te geven aan uw
          patiënt.{" "}
        </p>
        <p className="text-uz-grey">
          De oefeningen zijn, naargelang de fase van het revalidatieproces, in
          vier categorieën onderverdeeld:
        </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>Preoperatieve fase</li>
          <li>Direct postoperatieve fase (1 tot 6 weken na de operatie)</li>
          <li>Postoperatieve fase (langer dan 6 weken na de operatie)</li>
          <li>Onderhoudsfase</li>
        </ul>
        <p className="mb-3 text-uz-grey">
          In de{" "}
          <strong>
            <u>preoperatieve fase</u>
          </strong>{" "}
          wordt de focus gelegd op functionele activiteiten. De patiënt leert
          hoe hij functionele activiteiten kan uitvoeren met de beperkingen die
          hij postoperatief zal hebben. In de{" "}
          <strong>
            <u>direct postoperatieve fase</u>
          </strong>{" "}
          (1 tot 6 weken na de operatie) worden er pijndempende en circulatoire
          oefeningen aangeboden en oefeningen waarbij de patiënt niet steunt en
          geen abducties doet. In de derde fase, de{" "}
          <strong>
            <u>postoperatieve fase</u>
          </strong>{" "}
          (langer dan 6 weken na de operatie) zijn de oefeningen onderverdeeld
          in 4 groepen, op basis van de richtlijnen die de chirurg geeft over
          steunen en abductie uitvoeren. In de laatste fase, de{" "}
          <strong>
            <u>onderhoudsfase</u>
          </strong>
          , zijn de oefeningen moeilijker en meer doorgedreven.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          Aan de hand van de tabs “preoperatief”, “direct postoperatief”,
          “postoperatief” en “onderhoudsfase” kan u klikken op de juiste
          revalidatiefase. Als u op “postoperatief” klikt, ziet u de tabs
          “steunen” en “niet steunen” verschijnen. Klik op de tab die van
          toepassing is. Daarna verschijnen de tabs “abductie” en “geen
          abductie” en ook hier klikt u op de tab die van toepassing is. Eenmaal
          u op de juiste tabs geklikt heeft, kan u naar onder scrollen en ziet u
          een lijst met oefeningen die passen bij uw revalidatiefase.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          Hieronder vindt u een overzicht van de opbouw van de videobibliotheek.{" "}
        </p>
        <Image
          src={HL1}
          className="mb-3 w-[75rem]"
          alt="schematisch overzicht videobibliotheek"
        />

        <p className="mb-3 text-uz-grey">
          In de videobibliotheek staat naast elke video uitgelegd hoe de
          oefening moet worden uitgevoerd. Bij sommige oefeningen wordt er
          materiaal gebruikt, zoals een theraband, manchet, airexmat,... Aan de
          hand van een foto kan u zien hoe deze materialen gebruikt kunnen
          worden. De behandelende kinesitherapeut kan de patiënt deze materialen
          meegeven indien de oefeningen thuis worden uitgevoerd of de materialen
          kunnen vervangen worden door iets wat men thuis wel heeft liggen. Zo
          kan bijvoorbeeld een airexmatje vervangen worden door een kussen.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          Er is een handige{" "}
          <strong>
            <u>checklist</u>
          </strong>{" "}
          ter beschikking zodat de kinesitherapeut kan noteren welke oefeningen
          de patiënt mag uitvoeren. De therapeut schrijft per oefening de
          modaliteiten op. Voor de patiënt is er een balk aanwezig met de
          weekdagen zodat per oefening kan aangeduid worden wanneer de patiënt
          deze heeft uitgevoerd. Bij het uitvoeren van de oefeningen heeft de
          patiënt de mogelijkheid om bijkomende opmerkingen en moeilijkheden te
          noteren, die bij het volgende consult zullen besproken worden.{" "}
        </p>
        <p className="mb-3 text-uz-grey">De checklist vindt u hier:</p>
        <a
          className="ml-0 m-1 py-1 px-3 font-semibold cursor-pointer font-ubuntu border-uz-blue border-2 text-uz-blue hover:bg-uz-blue hover:text-white"
          href="/assets/Checklist-oefeningen-videobibliotheek.docx"
          download="Checklist-oefeningen-videobibliotheek"
        >
          Checklist Word
        </a>
        <a
          className="m-1 py-1 px-3 font-semibold cursor-pointer font-ubuntu border-red-700 border-2 text-red-700 hover:bg-red-700 hover:text-white"
          href="/assets/Checklist-oefeningen-videobibliotheek.pdf"
          download="Checklist-oefeningen-videobibliotheek"
        >
          Checklist PDF
        </a>
        <p className="my-3 text-uz-grey">
          Hier vindt u een lijst met oefeningen, geordend volgens doelstelling.
          De nummering in deze lijst komt overeen met de nummering die in de
          videobibliotheek wordt gebruikt. Deze lijst kan gebruikt worden door
          de behandelende kinesitherapeut bij het noteren van de oefeningen in
          de checklist die de patiënt thuis moet uitvoeren.
        </p>
        <a
          className="ml-0 m-1 py-1 px-3 font-semibold cursor-pointer font-ubuntu border-uz-blue border-2 text-uz-blue hover:bg-uz-blue hover:text-white"
          href="/assets/Oefeningen-genummerd-volgens-doelstelling.docx"
          download="Oefeningen-genummerd-volgens-doelstelling"
        >
          Overzicht Word
        </a>
        <a
          className="m-1 py-1 px-3 font-semibold cursor-pointer font-ubuntu border-red-700 border-2 text-red-700 hover:bg-red-700 hover:text-white"
          href="/assets/Oefeningen-genummerd-volgens-doelstelling.pdf"
          download="Oefeningen-genummerd-volgens-doelstelling"
        >
          Overzicht PDF
        </a>
      </div>
    </div>
  );
}
