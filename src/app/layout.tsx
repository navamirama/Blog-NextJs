import { Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from './GoogleAnalytics'

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

// function RootLayout({ Component, pageProps }: AppProps) {
//   return <>
//     <div className='container mx-auto font-sans'>
//       <Component {...pageProps} />
//     </div>
//   </>
// }

// export default RootLayout;