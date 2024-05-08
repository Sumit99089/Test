import { Navbar } from "../components/component-export.js"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}
