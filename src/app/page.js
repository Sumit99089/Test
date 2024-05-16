import "./page.css"
import { HeroSection, Service, BigNFTSlider } from "../components/component_export"

const page = () => {
    return (
        <div className="homePage">
            <HeroSection />
            <Service />
            <BigNFTSlider />
        </div>
    )
}

export default page