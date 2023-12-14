import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/default/Header/Header'
import Suspense from '@/components/default/Suspense/Suspense'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scammers.by - самые знаменитые мошенники в истории',
  description: 'Сайт о мошенниках',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <>
            <Header />
            {children}
          </>
        </Suspense>
      </body>
    </html>
  )
}
