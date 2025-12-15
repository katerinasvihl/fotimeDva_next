'use client'

import { useEffect } from 'react'
import clsx from 'clsx'

export type SnackbarVariant = 'success' | 'error' | 'info' | 'warning'

type SnackbarProps = {
  open: boolean
  message: string
  variant?: SnackbarVariant
  duration?: number
  onClose: () => void
}

export default function Snackbar({
  open,
  message,
  variant = 'info',
  duration = 3000,
  onClose,
}: SnackbarProps) {
  useEffect(() => {
    if (!open) return

    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div
      className={clsx(
        'fixed bottom-6 left-5 z-50 rounded-xl px-5 py-3 text-sm font-medium shadow-lg transition-all',
        {
          'bg-green-600 text-white': variant === 'success',
          'bg-red-600 text-white': variant === 'error',
          'bg-blue-600 text-white': variant === 'info',
          'bg-yellow-500 text-black': variant === 'warning',
        },
      )}
    >
      {message}
    </div>
  )
}
