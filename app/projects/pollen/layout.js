export const metadata = {
  title: 'Pollen',
  description: 'Endearing users to a product through simple and delightful designs.',
  themeColor: '#f5f5f5'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
