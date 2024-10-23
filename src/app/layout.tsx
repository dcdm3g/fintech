import { StyledComponentsProvider } from '@/lib/styled-components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Fintech',
  description: 'NextJS app with many fintech website features.',
}

const inter = Inter({
  subsets: ['latin'],
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
      </body>
    </html>
  )
}
