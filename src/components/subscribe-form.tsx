"use client";

import { addToast, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, FormEvent } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      addToast({ description: "Successfully subscribed!", color: "success" });
    } else {
      const error = await response.json();

      addToast({
        title: error.error,
        description: `Reason: ${error.details ?? "unknown"}`,
        color: "danger",
      });
    }

    setIsLoading(false);
  };

  return (
    <form
      className="space-y-4 flex flex-rowflex flex-col md:flex-row items-center gap-4 p-6"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex items-center gap-3">
        <Icon className="text-primary-500 h-6 w-6" icon="mdi:envelop" />
        <Input
          required
          className="w-full"
          placeholder="your@email.com"
          type="email"
          value={email}
          variant="underlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        className="w-auto flex flex-col gap-0"
        color="primary"
        disabled={isLoading}
        size="lg"
        type="submit"
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
        <span className="text-xs opacity-50">(free forever)</span>
      </Button>
    </form>
  );
}
