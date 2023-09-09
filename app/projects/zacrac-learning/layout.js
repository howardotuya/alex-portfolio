export const metadata = {
  title: 'Zacrac Learning',
  description: 'Created by Howard Otuya',
  themeColor: '#fafafa'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
