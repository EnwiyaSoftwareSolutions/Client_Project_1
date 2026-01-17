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
  import {useMessageStore} from '../../store/useMessageStore'

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const setMsg = useMessageStore((state: any) => state.setMessage);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Placeholder: replace with your real API call
      await new Promise((r) => setTimeout(r, 700))
      // console.log('submit', values)
      setSubmitted(true)
    } catch (err) {
      // handle error (show toast, etc.)
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full bg-[#0000007a] border border-yellow-400 shadow-lg">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-yellow-400">Contact Enwiya Lawfare</CardTitle>
          <CardDescription className="text-gray-300 pb-3">
            Send us a message for a free consultation. We respond to all
            enquiries within 1-2 business days.
          </CardDescription>
        </CardHeader>
{/* #323232 */}
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
                  className="text-gray-200 bg-[#323232] border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                  name="name"
                  placeholder="Full name"
                  value={values.name}
                  onChange={onChange}
                />
                <Input
                  className="text-gray-200 bg-[#323232] border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={onChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  className="text-gray-200 bg-[#323232] border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={values.phone}
                  onChange={onChange}
                />
                <Input
                  className="text-gray-200 bg-[#323232] border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={onChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={values.message}
                onChange={onChange}
                className={cn(
                  "min-h-[120px] w-full resize-none rounded-md border bg-[#323232] px-3 py-2 text-sm shadow-xs text-gray-200",
                  "border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-[3px]",
                  "text-sm md:text-base"
                )}
              />
            </div>
          )}
        </CardContent>

        <CardFooter>
          <div className="ml-auto w-full md:w-auto pt-3">
            <Button type="submit" disabled={submitting || submitted} className="w-full md:w-auto bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-500">
              {submitting ? "Sending..." : submitted ? "Sent" : "Send Message"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm