import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Ferramentaria Osten Moove',
  } ,
  icons: [
    {
      url: 'https://i.imgur.com/bNHewZ2.png',
    },
  ],
  description: 'Loja de Ferramentaria, controle de reservas e etc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
      >
        <Navbar/>
        <ToastContainer/>
        {children}
      </body>
    </html>
  )
}
