import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-5/6 mt-5 font-ubuntu text-lg">
        <h1 className="mb-3 text-xl font-roboto text-uz-blue">
          Videobibliotheek met thuisoefeningen en bijbehorende richtlijnen
          <br /> Voor de revalidatie na een reconstructieprothese van de
          proximale femur na een oncologische laesie
        </h1>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Over ons</h2>
        <p className="mb-3 text-uz-grey">
          Deze website is gemaakt in kader van een thesis van de opleiding
          Revalidatiewetenschappen en kinesitherapie aan de Universiteit Gent
          door 3 masterstudenten onder begeleiding van Prof. Dr. Gwen Sys.
        </p>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Voor wie</h2>
        <p className="mb-3 text-uz-grey">
          De website is bedoeld voor zowel patiënten die revalideren van een
          reconstructieprothese van de proximale femur, als voor hun
          behandelende kinesitherapeut en ergotherapeut. De videobibliotheek kan
          ook meegegeven worden aan de patiënt door de behandelende arts.
        </p>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">
          Wat kan u op deze website vinden
        </h2>
        <p className="mb-3 text-uz-grey">
          Op deze website kan u richtlijnen vinden voor de revalidatie na een
          reconstructieprothese van de proximale femur voor zowel patiënt als
          kinesitherapeut. Deze richtlijnen zijn opgesteld in samenwerking met
          artsen, kinesitherapeuten en ergotherapeuten van het UZ Gent.
          Daarnaast vindt u een uitgebreide videobibliotheek met video’s en
          bijbehorende instructies en foto’s voor de verschillende fasen in de
          revalidatie van de patiënt. Op deze website kan u ook een checklist
          vinden waar de uit te voeren thuisoefeningen voor de patiënt genoteerd
          kunnen worden. Aan de hand van deze checklist kan nadien het verloop
          van de uitgevoerde thuisoefeningen met de behandelende kinesitherapeut
          besproken worden. Voor een beter begrip en gebruik van de website kan
          u de handleiding nalezen.
        </p>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Ons doel</h2>
        <p className="mb-3 text-uz-grey">
          Met de richtlijnen willen wij informatie meegeven aan de perifere
          kinesitherapeut over de revalidatie van deze specifieke
          patiëntenpopulatie. Wij leggen in deze richtlijnen sterk de nadruk op
          het verschil en bijgevolg de extra aandachtspunten die gevolgd moeten
          worden bij een reconstructieprothese in vergelijking met de
          revalidatie na een klassieke heupprothese. Op heden is hier weinig
          kennis over bij de perifere kinesitherapeut.
        </p>
        <p className="mb-3 text-uz-grey">
          Met de videobibliotheek willen wij kinesitherapeut en patiënt
          begeleiden in het geven en uitvoeren van thuisoefeningen. Aan de hand
          van de video en instructie kan de patiënt de oefening op de correcte
          manier uitvoeren. Het uiteindelijke doel van onze videobibliotheek is
          dat er minder contactmomenten nodig zijn met de behandelende
          kinesitherapeut en dat de patiënt op een veilige manier aan de slag
          kan met zijn eigen revalidatie.
        </p>
        <p className="mb-3 text-uz-grey">
          Veel oefenplezier! <br />
          Marieke Fontaine - Lisse Sergeant - Jolien Van Cauwenberghe
        </p>
      </div>
    </div>
  );
}
