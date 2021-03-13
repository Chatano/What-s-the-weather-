import Global from '@styles/global'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Global />
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default MyApp
