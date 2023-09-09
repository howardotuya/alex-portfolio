export const metadata = {
  title: 'All Projects',
  description: 'Endearing users to a product through simple and delightful designs.',
  themeColor: '#161718'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
