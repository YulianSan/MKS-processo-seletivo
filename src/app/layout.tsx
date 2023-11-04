import { Global } from '@/components/layout/Global'
import { Header } from '@/components/layout/Header'
import { ReactQuery } from '@/contexts/ReactQuery'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS - ',
  description: 'Loja MKS',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <Global />
      <body>
        <Header />
        <ReactQuery>
          { children }
        </ReactQuery>
      </body>
    </html>
  )
}
