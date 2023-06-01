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
        <h1 className="mb-3 text-xl font-roboto text-uz-blue">
          Algemene richtlijnen voor de patiënt{" "}
        </h1>
        <p className="mb-3 text-uz-grey">
          Tijdens de revalidatie van uw reconstructieprothese is het van belang
          om de aanbevelingen en richtlijnen nauwgezet op te volgen.{" "}
        </p>

        <p className="mb-3 text-uz-grey">
          <strong>
            <u>Preoperatief</u>
          </strong>{" "}
          (voor de operatie) wordt u geïnformeerd over het verloop van de
          operatie en revalidatie. Idealiter krijgt u voor de operatie
          kinesitherapie om te leren hoe u een aantal alledaagse activiteiten na
          de operatie moet uitvoeren. Het is namelijk van belang om na de
          operatie rekening te houden met het beschermen van de prothese en de
          vastgehechte spieren en andere weefsels bij het uitvoeren van
          alledaagse activiteiten. Ook algemene oefentherapie is aangewezen om
          uw conditie en algemene belastbaarheid op te bouwen. Het kan zijn dat
          u preoperatief niet teveel kracht mag uitoefenen op de heup door
          verzwakking van het bot als gevolg van de tumor. Dit zal vermeld staan
          op uw voorschrift of dient nagevraagd te worden bij uw behandelende
          arts.
        </p>

        <p className="mb-3 text-uz-grey">
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
          plaats. Vanaf de stop van deze aanvullende therapie wacht men nog
          gemiddeld 6 weken en bekijkt men op medische beeldvorming of er
          voldoende ingroei van de prothese heeft plaatsgevonden. Het
          revalidatieproces zal hier dus trager verlopen.
        </p>

        <div className="flex items-center gap-5">
          <Image
            src={VDP5}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding van trochanter major met aanhechting van de abductoren"
          />
          <Image
            src={VDP6}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding van zijwaartse beweging van het been, abductie genaamd"
          />
        </div>

        <p className="mb-3 text-uz-grey">
          Indien u een{" "}
          <strong>
            <u>gecementeerde prothese</u>
          </strong>{" "}
          heeft, mag u net zoals bij een ingroeiprothese, de eerste 6 weken geen
          zijwaartse bewegingen van het been uitvoeren om de het bot met zijn
          spieraanhechtingen de tijd te geven om terug vast te groeien. Omwille
          van dezelfde reden mag u ook niet steunen in de eerste 6 weken. Als u
          chemo- en/of radiotherapie krijgt, zal de revalidatie, net zoals bij
          een ingroeiprothese, trager verlopen.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          U zal onmiddellijk na de operatie{" "}
          <u>
            <b>pijnstilling</b>
          </u>{" "}
          krijgen van het ziekenhuis. Het wordt ook aangeraden om na ontslag uit
          het ziekenhuis pijnstilling te nemen, omdat vroegtijdig stoppen met
          pijnmedicatie aanleiding kan geven tot een doorbraak van pijn, die
          moeilijk terug onder controle te krijgen is. Volgende medicatie kan u
          innemen:
        </p>

        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>
            Paracetamol is een goede pijnstiller. Gebruik nooit meer dan 4 gram
            per 24 uur.{" "}
          </li>
          <li>
            Ibuprofen 600 mg is een ontstekingsremmend geneesmiddel dat ook
            pijnstillend werkt. Het is belangrijk dit middel lang in te nemen om
            zwelling te verminderen. Bij maagklachten kan u een maagbeschermer
            erbij innemen.
          </li>
          <li>
            Tradonal Odis is een krachtige pijnstiller. Dit geneesmiddel kan
            slaperigheid veroorzaken, waardoor rijden met de wagen of het
            hanteren van zware machines wordt afgeraden. Dit geneesmiddel kan
            ook duizeligheid, misselijkheid en braken veroorzaken. Indien u dit
            ervaart, stop dan met het nemen van Tradonal Odis en neem indien
            nodig contact op met de (huis)arts om andere pijnstilling te
            verkrijgen.
          </li>
        </ul>

        <p className="mb-3 text-uz-grey">
          <strong>
            <u>Postoperatief</u>
          </strong>{" "}
          (na de operatie) zal u de eerste 6 weken een abductiebrace dragen om
          heupabuctie en -adductie te vermijden, zoals eerder vermeld zijn dit
          zijwaartse bewegingen van het geopereerde been. U mag, zoals eerder
          vermeld, 6 weken niet steunen op het geopereerde been. In het
          ziekenhuis zal de kinesitherapie bestaan uit algemene activerende
          oefeningen, circulatiebevorderende en pijndempende oefeningen en
          enkele krachtoefeningen van de niet-aangedane ledematen en romp.
          Onmiddellijk na de operatie is het van belang een aantal alledaagse
          activiteiten en transfers te oefenen, zoals opstaan uit bed, gaan
          zitten en rechtstaan van een stoel en plaatsnemen in een auto. Het is
          belangrijk dat dit op een correcte manier kan gebeuren om de prothese
          en vastgehechte structuren na de ingreep maximaal te beschermen.{" "}
        </p>

        <p className="mb-3 text-uz-grey">
          Als uw wonde voldoende genezen is en als de chirurg goedkeuring geeft,
          kan{" "}
          <strong>
            <u>hydrotherapie</u>
          </strong>{" "}
          opgestart worden. Dit betekent dat u therapie in het water zal
          krijgen. U zal oefeningen uitvoeren onder begeleiding in een zwembad.
          Indien u in het UZ Gent revalideert, zal het zwembad van het
          revalidatiecentrum K7 gebruikt worden. Veel patiënten weten niet aan
          wat ze zich moeten verwachten wanneer ze voor de eerste keer
          hydrotherapie krijgen. Daarom geven we u een kort overzicht over de
          verschillende stappen die worden genomen tijdens de therapie in het
          revalidatiecentrum K7:{" "}
        </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>
            Men start in water op schouderhoogte, omdat dan het meeste
            lichaamsgewicht door het water wordt gedragen en dit het oefenen een
            stuk gemakkelijker maakt. U voert een reeks lichte oefeningen uit
            onder begeleiding van een kinesitherapeut.
          </li>
          <li>
            Geleidelijk aan worden de oefeningen zwaarder gemaakt. U zal ook
            steeds meer naar het ondiepe deel van het zwembad gaan, zodat het
            water steeds lager komt te staan en er minder van uw lichaamsgewicht
            gedragen wordt door het water.{" "}
          </li>
          <li>
            Indien dit vlot gaat, mag u overgaan naar het grote zwembad. Daar
            krijgt u minder begeleiding van de kinesitherapeut en moet u meer
            zelfstandig oefenen. Natuurlijk is er altijd een kinesitherapeut
            aanwezig die observeert en waaraan u vragen kan stellen indien
            nodig.{" "}
          </li>
        </ul>

        <p className="mb-3 text-uz-grey">
          Uw{" "}
          <strong>
            <u>steunname</u>
          </strong>{" "}
          zal heel geleidelijk opgedreven worden tot volledige steunname terug
          mogelijk is. U mag pas steunen wanneer de chirurg het aangeeft.
          Hulpmiddelen zoals een looprek en krukken zullen gebruikt worden. Om u
          een globaal beeld te geven over de gangrevalidatie, geven we u de
          verschillende stappen die zullen gezet worden alvast mee:{" "}
        </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>
            Na de operatie ligt u nog enkele dagen in het ziekenhuis. U draagt
            een abductiebrace die de zijwaartse bewegingen van het been
            verhindert. Zoals eerder vermeld, mag u ten minste 6 weken niet
            steunen en draagt u ook voor 6 weken de abductiebrace. Samen met de
            kinesitherapeut van het ziekenhuis worden lichte oefeningen in het
            bed uitgevoerd.{" "}
          </li>
          <li>
            De kinesitherapeut van het ziekenhuis en deze aan huis zullen samen
            met u de eerste stappen zetten met een looprek, zonder dat u steunt
            op het aangedane been.{" "}
          </li>
          <li>
            Indien dit goed lukt, zal de kinesitherapeut u leren stappen met
            twee krukken. Initieel zal dit ook zonder steunname zijn op het
            aangedane been. Wanneer de chirurg de goedkeuring geeft, zal u
            kunnen steunen op het aangedane been.
          </li>
          <li>
            Wanneer u goede vooruitgang maakt, zal overgegaan worden tot het
            stappen met een kruk. Het kan aangeraden zijn om buiten, waar er
            oneffen ondergronden zijn, met twee krukken te stappen.{" "}
          </li>
          <li>
            Tot slot leert u stappen zonder krukken. Voor lange afstanden kan
            aangeraden worden om gebruik te maken van een kruk of wandelstok.
          </li>
        </ul>

        <p className="text-uz-grey">
          Hieronder vindt u een aantal zaken die u{" "}
          <strong>
            <u>niet mag doen</u>
          </strong>{" "}
          na de operatie om ontwrichting van de heupprothese te voorkomen:{" "}
        </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>
            U mag uw heup niet meer dan 90° plooien. Dit houdt in dat u niets
            van de grond mag oprapen door te hurken. Hurken vergroot de kans op
            ontwrichting en doet u daarom beter nooit meer na de operatie! De
            kinesitherapeut zal u andere strategieën aanleren om een voorwerp
            van de grond op te rapen zonder te moeten hurken. Daarnaast zal u
            ook niet zomaar uw kousen en schoenen mogen aandoen. Hiervoor zal u
            gebruik moeten maken van hulpmiddelen zoals een schoenlepel. Tot
            slot mag u ook niet in een diepe zetel of stoel zitten. U kan
            kussens gebruiken om een zetel of stoel op te hogen en een
            toiletverhoger om op het toilet te kunnen zitten zonder diepe
            heupbuiging.
          </li>
          <li>
            U mag het been niet gestrekt in lig opheffen direct na de operatie.
            Dit zal na de operatie een pijnlijke beweging zijn en zal u
            waarschijnlijk onbewust niet uitvoeren. Na verloop van tijd wordt de
            beweging minder pijnlijk en mag dit terug uitvoeren.
          </li>
          <Image
            src={VDP1}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding straight leg raise"
          />
          <li>
            U mag het been niet naar binnen of buiten draaien. Wanneer de
            prothese voldoende is ingegroeid (in geval van een ingroeiprothese)
            en na goedkeuring van de arts, zal u dit na verloop van tijd terug
            mogen doen.
          </li>
          <li>
            U mag niet met de benen gekruist zitten. Het been mag de middenlijn
            niet overkruisen. Indien u op uw zij slaapt, legt u best een kussen
            tussen de benen. Wanneer de prothese voldoende is ingegroeid (in
            geval van een ingroeiprothese) en na goedkeuring van de arts, zal u
            dit na verloop van tijd terug mogen doen.
          </li>
          <Image
            src={VDP2}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding kussen tussen benen in slaappositie"
          />
        </ul>

        <p className="mb-3 text-uz-grey">
          U moet dus aandachtig zijn dat u deze zaken niet uitvoert,
          voornamelijk tijdens de eerste weken na de operatie. Uw arts en
          kinesist zullen u hier verder in begeleiden. Naast ontwrichting zijn
          infecties ook{" "}
          <u>
            <b>verwikkelingen</b>
          </u>{" "}
          die kunnen optreden. Indien u koorts heeft, de huid rondom de heup
          rood is of u aanhoudende pijn heeft die niet overgaat door te rusten,
          kan dit wijzen op een infectie. U neemt dan zo snel mogelijk contact
          op met de arts.
        </p>

        <p className="mb-3 text-uz-grey">
          De kinesitherapie wordt geleidelijk aan opgebouwd. Een{" "}
          <strong>
            {" "}
            <u> perifere kinesitherapeut</u>
          </strong>{" "}
          , dit is een kinesist die niet gebonden is aan het ziekenhuis en dus
          werkt in een privépraktijk, zal u later in uw revalidatieproces
          behandelen. Thuisoefeningen zullen hierbij van pas komen. Hierbij kan
          deze videobibliotheek een handig hulpmiddel zijn. Het is belangrijk om
          tijdens het oefenen met uw kinesitherapeut aan te geven wanneer u pijn
          heeft. Als u ernstige pijn ervaart, stopt u met de oefeningen. Het kan
          zijn dat u stijfheid of lichte pijn ervaart na het oefenen, dit is
          normaal. Indien de pijn enkele dagen blijft aanhouden en deze de hele
          tijd aanwezig is, ook tijdens het rusten, dan contacteert u best uw
          arts om dit te bespreken.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          <strong>
            <u>Sportactiviteiten</u>
          </strong>{" "}
          die in de latere fase van de revalidatie aangeraden worden, zijn
          sporten met een lage impact en geringe schokbelasting zoals wandelen,
          fietsen, zwemmen, golfen en fietsen op een hometrainer. Het hernemen
          van sportbeoefening moet geleidelijk aan gebeuren en steeds in overleg
          met uw behandelende arts. Het risico op vallen moet beperkt worden
          tijdens het sporten, aangezien dit een risico geeft op ontwrichting.
          Sporten die herhaalde schokken veroorzaken, zoals contactsporten en
          lopen, worden niet aanbevolen. Ook het herhaaldelijk dragen van zware
          gewichten, zowel in de sportcontext als in het dagelijks leven, wordt
          afgeraden. Het is belangrijk om te blijven bewegen en een activiteit
          te vinden die u fit en gezond houdt.
        </p>
        <p className="mb-3 text-uz-grey">
          Het is belangrijk om te benadrukken dat de revalidatie na deze ingreep
          sterk individueel kan verschillen van patiënt tot patiënt. Het heeft
          dan ook geen zin om uw revalidatieproces te vergelijken met deze van
          andere patiënten.
        </p>

        <h1 className="mb-3 text-xl font-roboto text-uz-blue">
          Specifieke richtlijnen voor de patiënt
        </h1>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">
          Pijndempende en circulatoire oefeningen
        </h2>
        <p className="mb-3 text-uz-grey">
          Bewegen is van cruciaal belang voor het lichaam. Direct na de operatie
          kunnen enkele eenvoudige oefeningen uitgevoerd worden om het lichaam
          terug in beweging te brengen. Op deze manier kunnen afvalstoffen
          afgevoerd worden en kunnen voedingsstoffen en zuurstof naar onze
          weefsels gebracht worden. Bewegen kan ook de pijn en zwelling
          verminderen. Naast deze lichamelijke voordelen is het ook voor de
          mentale gezondheid belangrijk om in beweging te blijven. Deze
          oefeningen mogen meerdere keren per dag uitgevoerd worden. Het is
          belangrijk dat u hierbij geen pijn ervaart en dat u de bewegingen
          traag uitvoert. In de videobibliotheek staan oefeningen die u direct
          na de operatie kan uitvoeren. Deze zijn gefilmd op een yogamat, maar
          uiteraard kunnen deze oefeningen ook in bed uitgevoerd worden.{" "}
        </p>

        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Mobiliteit</h2>
        <p className="mb-3 text-uz-grey">
          Zowel voor als na de operatie kan de beweeglijkheid in de heup, maar
          ook in andere gewrichten van het onderste lidmaat, beperkt zijn.
          Mobiliteitsoefeningen helpen de beweeglijkheid terug te winnen. Bij
          voorkeur mag er geen pijn opgewekt worden. Indien er pijn is, zullen
          uw spieren zich onbewust aanspannen. Dit verhindert het doel van de
          oefening, namelijk het vergroten van de beweeglijkheid van gewrichten.
          Hoeveel keer per week u de oefeningen dient uit te voeren en het
          aantal herhalingen zal worden meegedeeld door de begeleidende
          kinesitherapeut.{" "}
        </p>

        <h2 className="mb-3 text-xl font-roboto text-uz-grey">
          Motorische controle
        </h2>
        <p className="mb-3 text-uz-grey">
          Motorische controle oefeningen zijn gericht op het verbeteren van een
          bewegingspatroon, het preciezer maken van een beweging en het
          vergroten van de efficiëntie van een beweging. Dit komt tot stand door
          een aandachtig oefenproces waarbij gewerkt wordt op de correcte
          spieractivatie. Dit zal vooral in de behandelsessies met de
          kinesitherapeut geoefend worden.{" "}
        </p>

        <p className="mb-3 text-uz-grey">
          Op de website vindt u enerzijds oefeningen gericht op het afzonderlijk
          kunnen aanspannen van de quadriceps, hamstrings en adductoren. Dit
          zijn spieren gelegen in het bovenbeen. Het is de bedoeling dat u deze
          spieren gericht en selectief aanspant. Als u bijvoorbeeld een
          quadriceps setting uitvoert, moet u de quadriceps aanspannen zonder
          dat de ander spieren zich aanspannen. Anderzijds is er ook een
          oefening die focust op het correct uitvoeren van bekkenkantelingen.
          Dit is essentieel voor een ergonomische en correcte heupbuiging. Volg
          de oefeningen stap voor stap op en vraag aan uw kinesitherapeut
          hoeveel keer u deze oefeningen dient uit te voeren.{" "}
        </p>

        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Spierkracht</h2>
        <p className="mb-3 text-uz-grey">
          Spierkrachtoefeningen zijn in elke fase van het revalidatieproces
          belangrijk. Voor de operatie zorgen deze oefeningen ervoor dat uw
          spieren in optimale conditie zijn voor aanvang van de operatie.
          Postoperatief is het belangrijk om de spierkracht van het
          niet-geopereerde been te onderhouden. Ook de kracht in het geopereerde
          been moet herwonnen worden, waarbij het belangrijk is dat u luistert
          naar de adviezen van de chirurg en kinesitherapeut. De oefeningen
          dienen geleidelijk aan opgebouwd te worden. Bespreek met uw
          kinesitherapeut hoeveel herhalingen en reeksen u van de aangeduide
          oefeningen mag uitvoeren.{" "}
        </p>

        <p className="mb-3 text-uz-grey">
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
          <Image
            src={VDP4}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding manchet"
          />
          <Image
            src={VDP3}
            className="w-[10rem] md:w-[20rem]"
            alt="afbeelding theraband"
          />
        </div>

        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Lenigheid</h2>
        <p className="mb-3 text-uz-grey">
          Als er bepaalde spieren in de benen verkort zijn, is het nuttig om
          deze spieren te stretchen. Dit is vooral zinvol om voor de operatie
          uit te voeren. Bij het uitvoeren van een stretch mag u een rekgevoel
          ervaren, maar u mag geen pijn hebben! Houd elke stretch voor 20 tot 30
          seconden aan en herhaal 3 keer. De kinesitherapeut zal vermelden
          indien stretching noodzakelijk is en hoeveel keer per week u de
          stretch mag uitvoeren.
        </p>

        <h2 className="mb-3 text-xl font-roboto text-uz-grey">Evenwicht</h2>
        <p className="mb-3 text-uz-grey">
          Indien u evenwichtstraining thuis wil uitvoeren, is het belangrijk dat
          u dit veilig doet. Zorg ervoor dat u zich altijd kan vastnemen aan een
          leuning of tafel indien u toch het evenwicht zou verliezen. Vraag hulp
          of persoonlijk begeleiding van mensen in uw omgeving indien nodig.
          Draag stevige, gesloten schoenen of antislipsokken. Doe deze
          oefeningen alleen als uw kinesitherapeut of arts u de toestemming
          geeft.{" "}
        </p>

        <p className="mb-3 text-uz-grey">
          U kan evenwichtstraining gemakkelijk in het dagelijks leven uitvoeren.
          Ga bijvoorbeeld eens stappen op het gras of op kasseien indien u dit
          reeds geoefend heeft in therapie. U kan bijvoorbeeld tijdens het koken
          een semi-tandemstand aannemen, waarbij u zich kan vasthouden aan het
          aanrecht indien u het evenwicht zou verliezen.{" "}
        </p>

        <Image
          src={VDP7}
          className="w-[10rem] md:w-[30rem] mb-3"
          alt="afbeelding voetposities"
        />

        <p className="mb-3 text-uz-grey">
          U kan de oefeningen als volgt moeilijker of gemakkelijker maken:{" "}
        </p>

        <p className="text-uz-grey">Moeilijker:</p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>Gebruik een onstabiele ondergrond zoals een matje</li>
          <li>Gebruik een hellend steunvlak</li>
          <li>
            Voer een cognitieve (bijvoorbeeld tellen vanaf 100 naar 0 in stappen
            van 7) of motorische (bijvoorbeeld met een bal in de handen een
            cijfer 8 beweging maken) dubbeltaak uit
          </li>
          <li>Sluit de ogen</li>
        </ul>

        <p className="text-uz-grey">Gemakkelijker: </p>
        <ul className="list-disc px-5 mb-3 text-uz-grey">
          <li>
            Gebruik een groter steunvlak door voeten verder uit elkaar te zetten
          </li>
          <li>Gebruik een spiegel</li>
          <li>Oefen op blote voeten</li>
        </ul>
        <p className="mb-3 text-uz-grey">
          Er zijn enkele foto’s toegevoegd aan de video’s die tonen hoe u de
          oefeningen moeilijker kan maken.{" "}
        </p>
        <h2 className="mb-3 text-xl font-roboto text-uz-grey">
          Functionele oefeningen met inbegrip van gangrevalidatie
        </h2>
        <p className="mb-3 text-uz-grey">
          Functionele oefeningen zijn erop gericht om dagelijkse activiteiten
          terug te kunnen uitvoeren, waarbij rekening wordt gehouden met uw
          beperkingen. Het is belangrijk om deze voor de operatie in te oefenen,
          zodat u deze na de operatie gemakkelijker kan uitvoeren. Er wordt een
          extra focus gelegd op oefeningen die uw gang zullen verbeteren.
        </p>
        <p className="mb-3 text-uz-grey">
          Postoperatief is het belangrijk dat u vraagt aan de kinesitherapeut
          welke functionele oefeningen u mag uitvoeren en wanneer u de
          oefeningen van gangrevalidatie mag starten. Indien u een volledig of
          partieel steunverbod heeft gekregen, wordt het ten zeerste aangeraden
          om steeds het advies van de arts op te volgen betreffende het moment
          dat u geheel of gedeeltelijk mag steunen. De oefeningen in de
          videobibliotheek kunnen ook steeds met steun van een kruk of
          wandelstok uitgevoerd worden.{" "}
        </p>
        <p className="mb-3 text-uz-grey">
          Stappen met plantair contact wil zeggen dat de voetzool van het
          geopereerde been contact maakt met de grond, zonder hierop te steunen.
          Beide handen zetten alle druk op de handvaten van het loophulpmiddel.
          Deze vangen alle steun op.{" "}
        </p>
      </div>
    </div>
  );
}
