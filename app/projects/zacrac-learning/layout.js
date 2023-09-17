export const metadata = {
  title: 'Zacrac Learning',
  description: 'Endearing users to a product through simple and delightful designs.',
  themeColor: '#fafafa'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
