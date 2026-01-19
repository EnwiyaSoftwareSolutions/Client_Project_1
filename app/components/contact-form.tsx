"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card"
import { useMessageStore } from "../../store/useMessageStore"

type ContactFormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const { setMessage, sendMSG } = useMessageStore()
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (submitting || submitted) return

    setSubmitting(true)

    try {
      await sendMSG(values)
      setMessage(values)
      setSubmitted(true)
    } catch (error) {
      console.error("Failed to submit contact form:", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full bg-[#0000007a] border border-yellow-400 shadow-lg">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-yellow-400">
            Contact Enwiya Law firm
          </CardTitle>
          <CardDescription className="text-gray-300 pb-3">
            Send us a message for a free consultation. We respond within 1–2
            business days.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <div className="rounded-md bg-yellow-400/20 p-4 text-yellow-200 border border-yellow-400">
              Thank you — your message has been received. We'll be in touch
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
                  className="bg-black text-gray-200 border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={onChange}
                  required
                  className="bg-black text-gray-200 border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  name="phone"
                  placeholder="Phone (optional)"
                  value={values.phone}
                  onChange={onChange}
                  className="bg-black text-gray-200 border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={onChange}
                  className="bg-black text-gray-200 border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={values.message}
                onChange={onChange}
                required
                className={cn(
                  "min-h-[120px] w-full resize-none rounded-md bg-black px-3 py-2 text-sm text-gray-200",
                  "border border-yellow-400 shadow-xs",
                  "focus:border-yellow-500 focus:ring-yellow-500 focus:ring-[3px]"
                )}
              />
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            disabled={submitting || submitted}
            className="ml-auto bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-500"
          >
            {submitting ? "Sending..." : submitted ? "Sent" : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm
