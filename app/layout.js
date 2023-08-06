import './globals.css';

export const metadata = {
  title: 'Alex Oyebade',
  description: 'Created by Howard Otuya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
