"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useMessageStore } from "../../store/useMessageStore";
import { userRegister } from "../../store/useUserRegisterStore";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const setMessage = useMessageStore((state) => state.setMessage);
  const sendMSG = useMessageStore((state) => state.sendMSG);
  const saveRegister = userRegister((state) => state.saveRegister);
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (submitting || submitted) return;

    setSubmitting(true);
    setError(null);

    try {
      await Promise.all([
        sendMSG(values),
        saveRegister({
          full_name: values.name,
          user_email: values.email,
          user_phonenumber: values.phone,
        }),
      ]);

      setMessage(values);
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong while sending your message. Please try again or contact us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="w-full bg-(--card)/80 border border-(--headder-text-color) shadow-lg">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-(--headder-text-color) font-(--font-geist-sans)">
            Contact Enwiya Law firm
          </CardTitle>
          <CardDescription className="text-muted-foreground pb-3 font-[var(--font-geist-sans)]">
            Send us a message for a free consultation. We respond within 1–2
            business days.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <div className="rounded-md bg-(--headder-text-color)/20 p-4 text-(--primary-accent) border border-(--headder-text-color)">
              Thank you — your message has been received. We&apos;ll be in touch
              shortly.
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Full name"
                  value={values.name}
                  onChange={onChange}
                  required
                  className="bg-card text-muted-foreground border-(--headder-text-color) focus:border-(--primary-accent) focus:ring-(--primary-accent)"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={onChange}
                  required
                  className="bg-card text-muted-foreground border-(--headder-text-color) focus:border-(--primary-accent) focus:ring-(--primary-accent)"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={onChange}
                  className="bg-card text-muted-foreground border-(--headder-text-color) focus:border-(--primary-accent) focus:ring-(--primary-accent)"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={onChange}
                  className="bg-card text-muted-foreground border-(--headder-text-color) focus:border-(--primary-accent) focus:ring-(--primary-accent)"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={values.message}
                onChange={onChange}
                required
                className={cn(
                  "min-h-30 w-full resize-none rounded-md bg-card px-3 py-2 text-sm text-muted-foreground",
                  "border border-(--headder-text-color) shadow-xs",
                  "focus:border-(--primary-accent) focus:ring-(--primary-accent) focus:ring-[3px]",
                )}
              />

              {error && (
                <p
                  role="alert"
                  className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive"
                >
                  {error}
                </p>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            disabled={submitting || submitted}
            className="ml-auto bg-(--item-color-schema) focus:ring-(--primary-accent) mt-[10px]"
          >
            {submitting ? "Sending..." : submitted ? "Sent" : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default ContactForm;
