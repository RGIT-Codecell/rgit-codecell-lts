import React from "react";

const registrationRules = [
  "Registrations beyond the registration date will not be entertained.",
  "Participants are encouraged to give valid information about themselves.",
  "The Gmail provided during registration should be the same as the one used to register on the CodeChef site.",
];

const eventRules = [
  "The coding segment starts sharp at 12:00 PM and ends at 02:00 PM on 11/10/2025.",
  "Usage of expressions that are vulgar, obscene, or derogatory is highly discouraged.",
  "Violation of copyrights, trademarks, or other rights can lead to disqualification.",
  "Copying solutions will lead to negative marking.",
  "Receiving assistance from an external party is prohibited.",
  "Participants are not allowed to use code written by them before the event.",
  "Anyone involved in malpractice will be disqualified.",
];

const resultRules = [
  "The decision will be system-generated; no arguments will be entertained.",
  "In case of the same score, ranking will be based on time.",
];

const RuleCard = ({ title, rules }: { title: string; rules: string[] }) => (
  <div className="bg-black border-[0.5px] border-slate-500 rounded-xl p-6 h-full">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-3 text-foreground/80">
      {rules.map((rule, index) => (
        <li key={index} className="flex items-start">
          <span className="text-slate-500 mr-3 mt-1">▹</span>
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Rules() {
  return (
    <section className="bg-transparent py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-porticoRough mb-8 lg:mb-12 text-center text-white">
        Rules and Regulations
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RuleCard title="During Registration" rules={registrationRules} />
        <RuleCard title="During the Event" rules={eventRules} />
        <RuleCard title="After Results" rules={resultRules} />
      </div>
    </section>
  );
}
