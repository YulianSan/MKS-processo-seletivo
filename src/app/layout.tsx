import { Footer } from '@/components/layout/Footer'
import { Global } from '@/components/layout/Global'
import { Header } from '@/components/layout/Header'
import { ReactQuery } from '@/contexts/ReactQuery'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'MKS',
  description: 'Loja MKS',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Global />
      <body>
        <Header />
        <ReactQuery>
          { children }
        </ReactQuery>
        <Footer />
      </body>
    </html>
  )
}
