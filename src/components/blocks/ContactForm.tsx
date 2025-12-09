'use client'

import Link from 'next/link'
import Icon from '../blocks/ui/Icon'
import { ContactFormProps } from '@/types/blocks'
import { useState } from 'react'

export const ContactForm = ({ title, socials }: Readonly<ContactFormProps>) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      e.currentTarget.reset()
    }
    console.log(data)
  }

  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[80px] md:px-12 xl:px-0">
      <h2>{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Vaše jméno"
          className="rounded border p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Váš email"
          className="rounded border p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Vaše zpráva"
          className="h-32 rounded border p-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-primary p-2 text-white"
        >
          {loading ? 'Odesílám...' : 'Odeslat zprávu'}
        </button>

        {success && (
          <p className="text-green-600">Zpráva úspěšně odeslána 🎉</p>
        )}
      </form>
      {Array.isArray(socials) && socials?.length ? (
        <div className="mt-10 flex justify-center gap-4">
          {socials.map((link) => (
            <Link
              key={link.link?.id}
              href={link.link?.url}
              className="relative h-[40px] w-[40px] duration-500 hover:scale-150"
            >
              <Icon icon={link.icon} className="absolute h-full w-min" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
