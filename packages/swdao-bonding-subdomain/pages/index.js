import BondingCard from '../components/BondingCard/BondingCard'
import Footer from '../components/Footer/Footer'
import { useColorMode } from '../contexts/ColorMode'
import { Header } from '../components/Header/Header'

export default function Home() {
    const { colorTheme } = useColorMode();

    return (
        <>
            <div
                style={{
                    backgroundColor: `${colorTheme?.background}`,
                    position: `relative`,
                }}
            >
                {/* <Nav /> */}
                <Header />
                <div
                    style={{
                        display: `grid`,
                        gridTemplateColumns: `1fr`,
                        padding: `2rem 0`,
                        margin: `0 auto`,
                        placeItems: `center`,
                    }}
                >
                    <BondingCard />
                </div>
                <Footer />
            </div>
        </>
    )
};