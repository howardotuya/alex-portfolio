export const metadata = {
  title: 'Sorolingo - Alex Oyebade',
  description: 'Created by Howard Otuya',
  themeColor: '#f5f5f5'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
