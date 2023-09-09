export const metadata = {
  title: 'Contentionary - Alex Oyebade',
  description: 'Created by Howard Otuya',
  themeColor: '#ebebec'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
