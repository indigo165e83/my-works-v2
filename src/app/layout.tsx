import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'My Works',
  description: 'This is the works I created. 私が制作した作品です。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
