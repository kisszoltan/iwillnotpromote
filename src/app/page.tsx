"use client";

import { Card, CardBody } from "@heroui/react";

import { Logo } from "@/components/logo";
import SubscribeForm from "@/components/subscribe-form";

export default function HomePage() {
  return (
    <div className="text-foreground flex items-center justify-center px-4">
      <section className="max-w-2xl w-full flex flex-col gap-10 items-center text-center">
        <h1 className="flex flex-col items-center text-4xl md:text-5xl font-bold tracking-tight">
          <Logo size={128} />
          (Not) Promote
        </h1>
        <p className="text-default-500">
          A weekly newsletter of the best undercover startup posts on
          Reddit&apos;s /r/startups subred.
        </p>
        <p className="text-default-500 text-lg md:text-xl tracking-wide">
          No spam. No pitch. Just short introduction of startups and their
          attached stories (if you are interested).
        </p>

        <Card className="w-full shadow-lg">
          <CardBody>
            <SubscribeForm />
          </CardBody>
        </Card>

        <ul className="text-left text-sm text-default-400 space-y-1 list">
          <li className="list-disc">
            Clear promotions. Not tricky, evasive advertisers.
          </li>
          <li className="list-disc">
            Just clever startup signals you&apos;d miss otherwise.
          </li>
          <li className="list-disc">Unsubscribe anytime, no hard feelings.</li>
        </ul>
      </section>
    </div>
  );
}
