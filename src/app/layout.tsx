import { Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from './GoogleAnalytics'
import AdSense from '@/components/AdSense'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      {/* <AdSense pId="3788216384888856"/> */}
      <meta name="google-adsense-account" content="ca-pub-3788216384888856" ></meta>
      </head>
      
      <body className={`container mx-auto ${roboto.className}`}>
        <Navbar />
        <main className="pb-32">
        <GoogleAnalytics />
          {children}

        </main>
        <Footer></Footer>
      </body>

    </html>
  )
}
