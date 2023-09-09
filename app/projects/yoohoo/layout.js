export const metadata = {
  title: 'Yoohoo - Alex Oyebade',
  description: 'Created by Howard Otuya',
  themeColor: '#161718'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
