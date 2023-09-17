export const metadata = {
  title: 'Contentionary',
  description: 'Endearing users to a product through simple and delightful designs.',
  themeColor: '#ebebec'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
