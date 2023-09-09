export const metadata = {
  title: 'Flow Finance',
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
