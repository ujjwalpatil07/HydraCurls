import HeroSection from './sections/HeroSection'
import BrandIntroSection from './sections/BrandIntroSection'
import ProductShowcaseSection from './sections/ProductShowcaseSection'
import ProductInformationSection from './sections/ProductInformationSection'
import ProductExperienceSection from './sections/ProductExperienceSection'
import HydrationSection from './sections/HydrationSection'
import NatureSection from './sections/NatureSection'
import ExpertsSection from './sections/ExpertsSection'
import './App.css'
import ProductExperienceWrapper from './components/ProductExperienceWrapper'
import CommunityResultsSection from './sections/CommunityResultsSection'
import beforeAfterImg from '../assets/images/before-after-hair.jpg'
import HairTypesSection from './sections/HairTypesSection'
import LearnGrowSection from './sections/LearnGrowSection'
import RevolutionSection from './sections/RevolutionSection'
import FooterSection from './sections/FooterSection'

function App() {
     return (
          <div className="overflow-x-hidden">
               <main id='top'>

                    <HeroSection />

                    <BrandIntroSection />

                    <ProductShowcaseSection />

                    <ProductInformationSection />

                    <ProductExperienceWrapper>
                         <ProductExperienceSection />
                    </ProductExperienceWrapper>

                    <HydrationSection />

                    <NatureSection /> 

                    <CommunityResultsSection
                         beforeImage={beforeAfterImg}
                         afterImage={beforeAfterImg}
                    />

                    <ExpertsSection />

                    <HairTypesSection />

                    <LearnGrowSection />
                    
                    <RevolutionSection />

                    <FooterSection />
               </main>
          </div>
     )
}

export default App