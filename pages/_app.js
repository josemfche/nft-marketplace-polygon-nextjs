/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nft-marketplace-polygon-nextjs-josemfche.vercel.app/" />
        <meta property="twitter:title" content="NFTs Marketplace Polygon" />
        <meta property="twitter:description" content="List and sell your NFTs in this Marketplace!" />
        <meta property="twitter:image" content="https://i.pinimg.com/originals/7f/2a/0b/7f2a0ba00fce14eb7bafbabcc23c2582.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nft-marketplace-polygon-nextjs-josemfche.vercel.app/" />
        <meta property="og:title" content="NFTs Marketplace Polygon" />
        <meta property="og:description" content="List and sell your NFTs in this Marketplace!" />
        <meta property="og:image" content="https://i.pinimg.com/originals/7f/2a/0b/7f2a0ba00fce14eb7bafbabcc23c2582.png" />
        <title>NFTs Marketplace Polygon</title>
      </Head>
      <nav className="border-b p-6 bg-slate-800">
        <p className="text-4xl font-bold text-white">NFTs Marketplace Polygon</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp