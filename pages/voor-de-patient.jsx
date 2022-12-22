import Head from "next/head";
import Image from "next/image";
import VDP1 from "../public/VDPatient/VDP1.jpg";
import VDP2 from "../public/VDPatient/VDP2.gif";
import VDP3 from "../public/VDPatient/VDP3.png";
import VDP4 from "../public/VDPatient/VDP4.jpg";
import VDP5 from "../public/VDPatient/VDP5.jpg";
import VDP6 from "../public/VDPatient/VDP6.png";
import VDP7 from "../public/VDPatient/VDP7.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Voor de patiënt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-5/6 mt-5 font-ubuntu text-lg">
        <h1 class="mb-3 text-xl font-roboto text-uz-blue">
          Algemene richtlijnen voor de patiënt{" "}
        </h1>
        <p class="mb-3 text-uz-grey">
          Tijdens de revalidatie van uw reconstructieprothese is het van belang
          om de aanbevelingen en richtlijnen nauwgezet op te volgen.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          <strong>
            <u>Preoperatief</u>
          </strong>{" "}
          wordt u geïnformeerd over het verloop van de operatie en revalidatie.
          Idealiter krijgt u preoperatieve kinesitherapie om te leren hoe u een
          aantal functionele activiteiten postoperatief moet uitvoeren. Het is
          namelijk van belang om postoperatief rekening te houden met het
          beschermen van de prothese en de vastgehechte structuren bij het
          uitvoeren van alledaagse activiteiten. Ook algemene oefentherapie is
          aangewezen om uw conditie en algemene belastbaarheid op te bouwen.
        </p>

        <p class="mb-3 text-uz-grey">
          Uw chirurg kan tijdens de operatie een ingroeiprothese of een
          gecementeerde prothese plaatsen. Tijdens het plaatsen van een{" "}
          <strong>
            <u>ingroeiprothese</u>
          </strong>{" "}
          wordt de trochanter major, een stukje bot van het bovenbeen,
          losgemaakt en terug vastgehecht. Op de trochanter major bevinden zich
          vasthechtingen van spieren, de abductoren genaamd. Het duurt minstens
          6 weken vooraleer de trochanter major met deze spieraanhechtingen
          terug stevig is vastgegroeid, waardoor u de eerste 6 weken geen
          abducties mag uitvoeren. Dit betekent dat u uw been niet zijwaarts mag
          bewegen. Ook mag u de eerste 6 weken niet steunen. Steunen mag wanneer
          de prothese voldoende is ingegroeid. Ingroei wordt bevestigd op
          medische beeldvorming. Uw chirurg zal aangeven wanneer het toegestaan
          is om te steunen. Als u chemotherapie of radiotherapie krijgt, wordt
          ingroei van de prothese belemmerd. In deze periode mag u niet steunen.
          Van zodra de chemo- en/of radiotherapie beëindigd is, vindt ingroei
          plaats. Vanaf de stop van deze adjuvante therapie wacht men nog
          gemiddeld 6 weken en bekijkt men op medische beeldvorming of er
          voldoende ingroei van de prothese heeft plaatsgevonden. Het
          revalidatieproces zal bij adjuvante therapie dus trager verlopen.
        </p>

        <div className="flex items-center gap-5">
          <Image src={VDP5} className="w-[20rem]" />
          <Image src={VDP6} className="w-[20rem]" />
        </div>

        <p class="mb-3 text-uz-grey">
          Indien u een{" "}
          <strong>
            <u>gecementeerde prothese</u>
          </strong>{" "}
          heeft, mag u net zoals bij een ingroeiprothese, de eerste 6 weken geen
          abductie uitvoeren om de trochanter major met zijn
          abductorenvasthechtingen de tijd te geven om terug vast te groeien.
          Omwille van dezelfde reden mag u ook niet steunen in de eerste 6
          weken. Als u chemo- en/of radiotherapie krijgt, zal de revalidatie,
          net zoals bij een ingroeiprothese, trager verlopen.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          <strong>
            <u>Postoperatief</u>
          </strong>{" "}
          zal u de eerste 6 weken een abductiebrace dragen om heupabucties te
          vermijden. U mag, zoals eerder vermeld, 6 weken niet steunen op het
          geopereerde been. In het ziekenhuis zal de kinesitherapie bestaan uit
          algemene activerende oefeningen, circulatoire en pijndempende
          oefeningen en enkele krachtoefeningen van de niet-aangedane ledematen
          en romp. Alledaagse activiteiten zoals opstaan uit bed, gaan zitten en
          rechtstaan zullen geoefend worden.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          Als uw wonde voldoende genezen is en als de chirurg goedkeuring geeft,
          kan{" "}
          <strong>
            <u>hydrotherapie</u>
          </strong>{" "}
          opgestart worden. Dit betekent dat u therapie in het water zal
          krijgen. U zal oefeningen uitvoeren onder begeleiding in een zwembad.
          Indien u in het UZ Gent revalideert, zal het zwembad van het
          revalidatiecentrum K7 gebruikt worden.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          Uw{" "}
          <strong>
            <u>steunname</u>
          </strong>{" "}
          zal heel progressief opgedreven worden tot volledige steunname terug
          mogelijk is. U mag pas steunen wanneer de chirurg het aangeeft.
          Hulpmiddelen zoals een looprek en krukken zullen gebruikt worden.
        </p>

        <p class="mb-3 text-uz-grey">
          Hieronder vindt u een aantal zaken dat u{" "}
          <strong>
            <u>niet mag doen</u>
          </strong>{" "}
          na de operatie:{" "}
          <ul className="list-disc px-5">
            <li>
              U mag uw heup niet meer dan 90° plooien. Dit houdt in dat u niets
              van de grond mag oprapen door te hurken. De kinesitherapeut zal u
              andere strategieën aanleren om een voorwerp van de grond op te
              rapen zonder te moeten hurken. Daarnaast zal u ook niet zomaar uw
              kousen en schoenen mogen aandoen. Hiervoor zal u gebruik moeten
              maken van hulpmiddelen zoals een schoenlepel. Tot slot mag u ook
              niet in een diepe zetel of stoel zitten. U kan kussens gebruiken
              om een zetel of stoel op te hogen en een toiletverhoger om op het
              toilet te kunnen zitten zonder diepe heupbuiging.
            </li>
            <li>
              U mag geen straight leg raise uitvoeren. Dit betekent dat u in lig
              het been niet gestrekt mag opheffen.
            </li>
            <Image src={VDP1} className="w-[20rem]" />
            <li>U mag het been niet naar binnen of buiten draaien.</li>
            <li>
              U mag niet met de benen gekruist zitten. Het been mag de
              middenlijn niet overkruisen. Indien u op uw zij slaapt, legt u
              best een kussen tussen de benen.
            </li>
            <Image src={VDP2} className="w-[20rem]" />
          </ul>
        </p>

        <p class="mb-3 text-uz-grey">
          De kinesitherapie wordt geleidelijk aan opgebouwd. Een{" "}
          <strong>
            {" "}
            <u> perifere kinesitherapeut</u>
          </strong>{" "}
          zal u later in uw revalidatieproces behandelen. Thuisoefeningen zullen
          hierbij van pas komen. Hierbij kan deze videobibliotheek een handig
          hulpmiddel zijn. Het is belangrijk om tijdens het oefenen met uw
          kinesitherapeut aan te geven wanneer u pijn heeft. Als u pijn ervaart,
          stopt u met de oefeningen.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          <strong>
            <u>Sportactiviteiten</u>
          </strong>{" "}
          die in de latere fase van de revalidatie aangeraden worden, zijn
          sporten met een lage impact en geringe schokbelasting zoals wandelen,
          fietsen, zwemmen, golfen en fietsen op een hometrainer. Het hernemen
          van sportbeoefening moet geleidelijk aan gebeuren en steeds in overleg
          met uw behandelende arts. Het risico op vallen moet beperkt worden
          tijdens het sporten, aangezien dit een risico geeft op ontwrichting.
          Sporten die herhaalde schokken veroorzaken, zoals lange afstandslopen
          alsook contactsporten worden niet aanbevolen. Het is belangrijk om te
          blijven bewegen en een activiteit te vinden die u fit en gezond houdt.
        </p>

        <h1 class="mb-3 text-xl font-roboto text-uz-blue">
          Specifieke richtlijnen voor de patiënt
        </h1>
        <h2 class="mb-3 text-xl font-roboto text-uz-grey">
          Pijndempende en circulatiebevorderende oefeningen
        </h2>
        <p class="mb-3 text-uz-grey">
          Bewegen is van cruciaal belang voor het lichaam. Direct postoperatief
          kunnen enkele eenvoudige oefeningen uitgevoerd worden om het lichaam
          terug in beweging te brengen. Op deze manier kunnen afvalstoffen
          afgevoerd worden en kunnen voedingsstoffen en zuurstof naar onze
          weefsels gebracht worden. Bewegen kan ook de pijn en zwelling
          verminderen. Naast deze fysieke voordelen is het ook voor de mentale
          gezondheid belangrijk om in beweging te blijven. Deze oefeningen mogen
          meerdere keren per dag uitgevoerd worden. Het is belangrijk dat u
          hierbij geen pijn ervaart en dat u de bewegingen traag uitvoert.{" "}
        </p>

        <h2 class="mb-3 text-xl font-roboto text-uz-grey">Mobiliteit</h2>
        <p class="mb-3 text-uz-grey">
          Zowel pre- als postoperatief kan de mobiliteit in de heup, maar ook in
          andere gewrichten van het onderste lidmaat beperkt zijn.
          Mobiliteitsoefeningen helpen de beweeglijkheid terug te winnen. Bij
          voorkeur mag er geen pijn opgewekt worden. Indien er pijn is, zullen
          uw spieren zich reflexmatig opspannen. Dit belemmert het doel van de
          oefening, namelijk het vergroten van de beweeglijkheid van gewrichten.
          Hoeveel keer per week u de oefeningen dient uit te voeren en het
          aantal herhalingen zal worden meegedeeld door de begeleidende
          kinesitherapeut.{" "}
        </p>

        <h2 class="mb-3 text-xl font-roboto text-uz-grey">
          Motorische controle
        </h2>
        <p class="mb-3 text-uz-grey">
          Motorische controle oefeningen zijn gericht op het verbeteren van een
          bewegingspatroon, het preciezer maken van een beweging en het
          vergroten van de efficiëntie van een beweging. Dit komt tot stand door
          een aandachtig oefenproces waarbij gewerkt wordt op de correcte
          spieractivatie. Dit zal vooral in de behandelsessies met de
          kinesitherapeut geoefend worden.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          Op de website vindt u enerzijds oefeningen gericht op selectieve
          spierrekrutering van quadriceps, hamstrings en adductoren. Dit
          betekent dat u deze spieren selectief kunt aanspannen. Anderzijds is
          er ook een oefening die focust op het correct uitvoeren van
          bekkenkantelingen. Dit is essentieel voor een ergonomische en correcte
          heupbuiging. Volg de oefeningen stap voor stap op en vraag aan uw
          kinesitherapeut hoeveel keer u deze oefeningen dient uit te voeren.{" "}
        </p>

        <h2 class="mb-3 text-xl font-roboto text-uz-grey">Spierkracht</h2>
        <p class="mb-3 text-uz-grey">
          Spierkrachtoefeningen zijn in elke fase van het revalidatieproces
          belangrijk. Preoperatief zorgen deze oefeningen ervoor dat uw spieren
          in een optimale conditie zijn voor de aanvang van de ingreep.
          Postoperatief is het belangrijk om de spierkracht van het
          niet-geopereerde been te onderhouden. Ook de kracht in het geopereerde
          been moet herwonnen worden, waarbij het belangrijk is dat u luistert
          naar de richtlijnen en modaliteiten van de chirurg en kinesitherapeut.
          De oefeningen dienen geleidelijk aan opgebouwd te worden. Bespreek met
          uw kinesitherapeut hoeveel herhalingen en reeksen u van de aangeduide
          oefeningen mag uitvoeren.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          De oefeningen kunnen steeds zwaarder gemaakt worden door een manchet
          of een theraband te gebruiken. Een manchet is een klein gewicht (0.5,
          1, 1.5 of 2 kg) dat u eenvoudig kan bevestigen rond uw enkel.
          Therabanden zijn elastische rekkers die bestaan in verschillende
          kleuren. Elke kleur komt overeen met een verschillende weerstand. De
          gele band is de lichtste, daarna volgt rood, groen, blauw en de
          sterkste band is de zwarte. De theraband kan ter hoogte van de boven-
          en onderbenen aangebracht worden. Een theraband rond de onderbenen
          maakt de oefening lastiger dan een theraband rond de bovenbenen. Bij
          iedere oefening is een foto toegevoegd om het gebruik van de manchet
          of theraband toe te lichten.{" "}
        </p>

        <div className="flex items-center gap-5">
          <Image src={VDP4} className="w-[20rem]" />
          <Image src={VDP3} className="w-[20rem]" />
        </div>

        <h2 class="mb-3 text-xl font-roboto text-uz-grey">Lenigheid</h2>
        <p class="mb-3 text-uz-grey">
          Als er bepaalde spieren in de onderste ledematen verkort zijn, is het
          nuttig om deze spieren te stretchen. Dit zal voornamelijk preoperatief
          van toepassing zijn. Bij het uitvoeren van een stretch mag u een
          rekgevoel ervaren, maar u mag geen rekpijn hebben! Houd elke stretch
          voor 20 tot 30 seconden aan en herhaal 3 keer. De kinesitherapeut zal
          vermelden indien stretching noodzakelijk is en hoeveel keer per week u
          de stretch mag uitvoeren.
        </p>

        <h2 class="mb-3 text-xl font-roboto text-uz-grey">Evenwicht</h2>
        <p class="mb-3 text-uz-grey">
          Indien u evenwichtstraining thuis wil uitvoeren, is het belangrijk dat
          u dit veilig doet. Zorg ervoor dat u zich altijd kan vastnemen aan een
          leuning of tafel indien u toch het evenwicht zou verliezen. Vraag hulp
          of supervisie van een derde indien nodig. Draag stevige, gesloten
          schoenen of antislipsokken. Doe deze oefeningen alleen als uw
          kinesitherapeut of arts u de toestemming geeft.{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          U kan evenwichtstraining gemakkelijk in het dagelijks leven uitvoeren.
          Ga bijvoorbeeld eens stappen op het gras of op kasseien indien u dit
          reeds geoefend heeft in therapie. U kan bijvoorbeeld tijdens het koken
          een semi-tandemstand aannemen, waarbij u zich kan vasthouden aan het
          aanrecht indien u het evenwicht zou verliezen.{" "}
        </p>

        <Image src={VDP7} className="w-[30rem] mb-3" />

        <p class="mb-3 text-uz-grey">
          U kan de oefeningen als volgt moeilijker of gemakkelijker maken:{" "}
        </p>

        <p class="mb-3 text-uz-grey">
          Moeilijker:
          <ul className="list-disc px-5">
            <li>Gebruik een instabiele ondergrond zoals een airexmatje</li>
            <li>Gebruik een hellend steunvlak</li>
            <li>
              Voer een cognitieve (bijvoorbeeld tellen vanaf 100 naar 0 in
              stappen van 7) of motorische (bijvoorbeeld met een bal in de
              handen een cijfer 8 beweging maken) dubbeltaak uit
            </li>
            <li>Sluit de ogen</li>
          </ul>
        </p>

        <p class="mb-3 text-uz-grey">
          Gemakkelijker:{" "}
          <ul className="list-disc px-5">
            <li>
              Gebruik een groter steunvlak door voeten verder uit elkaar te
              zetten
            </li>
            <li>Gebruik een spiegel</li>
            <li>Oefen op blote voeten</li>
          </ul>
        </p>
        <p class="mb-3 text-uz-grey">
          Er zijn enkele foto’s toegevoegd aan de video’s die tonen hoe u de
          oefeningen moeilijker kan maken.{" "}
        </p>
        <h2 class="mb-3 text-xl font-roboto text-uz-grey">
          Functionele oefeningen met inbegrip van gangrevalidatie
        </h2>
        <p class="mb-3 text-uz-grey">
          Functionele oefeningen zijn erop gericht om dagelijkse activiteiten
          terug te kunnen uitvoeren, waarbij rekening wordt gehouden met uw
          beperkingen. Het is belangrijk om deze preoperatief in te oefenen,
          zodat u deze postoperatief gemakkelijker kan uitvoeren. Er wordt een
          extra focus gelegd op oefeningen die uw gang zullen verbeteren.
        </p>
        <p class="mb-3 text-uz-grey">
          Postoperatief is het belangrijk dat u vraagt aan de kinesitherapeut
          welke functionele oefeningen u mag uitvoeren en wanneer u de
          oefeningen van gangrevalidatie mag starten. Indien u een volledig of
          partieel steunverbod heeft gekregen, wordt het ten zeerste aangeraden
          om steeds het advies van de arts op te volgen betreffende het moment
          dat u geheel of gedeeltelijk mag steunen.{" "}
        </p>
        <p class="mb-3 text-uz-grey">
          Stappen met plantair contact wil zeggen dat de voetzool van het
          geopereerde been contact maakt met de grond, zonder hierop te steunen.
          Beide handen zetten alle druk op de handvaten van het loophulpmiddel.
          Deze vangen alle steun op.{" "}
        </p>
      </div>
    </div>
  );
}
