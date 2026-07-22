"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const chapters = [
  {
    label: "Das frühere Leben",
    headline: "Erfolgreich. Intelligent. Und dennoch unglücklich.",
    body: "Von außen stimmte alles: Mit Mitte Dreißig war Sabine selbständiger Financial Planner für VIP-Kunden der Deutschen Bank — erfolgreich, intelligent, attraktiv. Doch innen fühlte sie sich unsicher und unglücklich. Was sie störte, konnte sie selbst nicht bestimmen.",
  },
  {
    label: "Der Wendepunkt",
    headline: "Eine Begegnung verändert alles.",
    body: "Anstoß zur Veränderung war eine Behandlung von Lothar Kuch, einem Heiler in Berlin. Sabine erlebte so Unglaubliches, dass ihr damaliges Weltbild völlig auf den Kopf gestellt wurde. Plötzlich war ihr bewusst: Es gibt viel mehr zwischen Himmel und Erde, als wir uns vorstellen können.",
  },
  {
    label: "Das Lernen",
    headline: "Schamanen, Systeme und Stille.",
    body: "Danach widmete sich Sabine Dingen, die sie früher als Spinnerei abgetan hätte. Sie lernte von Schamanen im Peruanischen Regenwald, absolvierte Ausbildungen in InnerWise® und Systemischen Strukturaufstellungen (SySt®). Ein intensiver Lernprozess über Menschen, Heilung, Energien, Raum und Zeit.",
  },
  {
    label: "Die Gabe",
    headline: "Die Bilder zeigten, was sie nicht wissen konnte.",
    body: "Nach einem Workshop bei der japanischen Künstlerin Meera begann Sabine, für Freunde und Familienangehörige Bilder zu malen. Erstaunlich war, dass sich auf diesen Bildern oft etwas ganz anderes zeigte, als sie von ihnen wusste. Doch die Rückmeldungen waren klar: Die Bilder brachten kraftvolle Wirkung in Gang.",
  },
  {
    label: "SALT entsteht",
    headline: "Heute folge ich meinem inneren Ruf.",
    body: "Es hat Sabine Jahre gekostet, offen darüber reden zu können. Heute folgt sie ihrem inneren Ruf, geht ihren Weg — und möchte möglichst vielen Menschen helfen, auch ihren Weg zu gehen. SALT = Sabine Alter.",
  },
] as const;

export default function UeberSabine() {
  useScrollReveal();

  return (
    <section id="sabine" className="relative overflow-hidden bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20 md:py-32">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-salt-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-salt-crimson/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1140px] relative z-10">
        <div className="mb-20">
          <div
            className="reveal-on-scroll mb-8 flex items-center gap-4"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
            <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
              Die Künstlerin
            </p>
          </div>

          <h2
            className="reveal-on-scroll mb-8 font-sans font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              transitionDelay: "100ms",
            }}
          >
            Über Sabine
          </h2>

          <div
            className="reveal-on-scroll h-0.5 w-14 bg-salt-crimson"
            style={{ transitionDelay: "140ms" }}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-8 md:sticky md:top-32">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5 border border-white/10 rounded-sm shadow-2xl">
              <Image
                src="/paintings/Größe_Sabine vor Wirkungs-Bild.jpg"
                alt="Sabine Alter — SALT Energie-Künstlerin"
                fill
                className="object-cover object-center transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute bottom-6 left-6 rounded-sm bg-salt-crimson px-5 py-2.5 font-sans text-[0.7rem] font-bold tracking-[0.2em] text-white uppercase shadow-2xl">
                Sabine Alter
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {(
                [
                  { value: "38+", label: "E-Bilder" },
                  { value: "15+", label: "Jahre" },
                  { value: "100+", label: "Aufstlg." },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-sm bg-white/5 border border-white/10 p-5 backdrop-blur-md"
                >
                  <p className="mb-2 font-sans text-2xl leading-none font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.1em] text-white/40 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.label}
                className="reveal-on-scroll border-l border-white/10 pl-8 md:pl-10 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="mb-3 font-sans text-[0.65rem] font-bold tracking-[0.25em] text-salt-crimson uppercase">
                  {chapter.label}
                </p>

                <h3 className="mb-5 font-sans text-xl md:text-2xl leading-[1.2] font-extrabold text-white tracking-tight group-hover:text-salt-crimson transition-colors duration-500">
                  {chapter.headline}
                </h3>

                <p className="font-sans text-base leading-[1.85] font-medium text-white/50">
                  {chapter.body}
                </p>
              </div>
            ))}

            <div
              className="reveal-on-scroll border-t border-white/10 pt-10"
              style={{ transitionDelay: "600ms" }}
            >
              <p className="mb-8 font-sans text-base leading-[1.8] font-medium text-white/40">
                Möchtest Du Sabines vollständige Geschichte lesen?
                Oder direkt ein Gespräch vereinbaren?
              </p>
              <a
                href="https://calendly.com/salt-art/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm bg-salt-crimson px-10 py-5 font-sans text-xs font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl"
              >
                Gespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
