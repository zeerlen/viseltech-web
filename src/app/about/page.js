import AboutUs from "@/components/About/AboutUs/AboutUs"
import Team from "@/components/About/Team/Team"
import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
import BestFeature from "@/components/About/BestFeature/BestFeature"
import Cta from "@/components/CTA/Cta"
import { PageWrapper } from "../page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"

export const metadata = {
  title: 'Sobre - ViselTech',
  description: 'A ViselTech é uma startup que oferece soluções de inteligência artificial, hiperautomação, e automação de processos robóticos (RPA) para empresas de todos os tamanhos. Nossas soluções ajudam a aumentar a eficiência, reduzir custos e melhorar a experiência do cliente.',
}
const aboutSections = [
  {
    section: <AboutUs/>
  },
  {
    section: <BestFeature/>
  },
  {
    section: <Cta heading={"Transformação Digital Inteligente"} para={"Transforme seu negócio com soluções digitais inteligentes e alcance novos patamares."}/>
  },
  {
    section: <AboutWorking/>
  },
  {
    section: <Team/>
  },
  {
    section: <ContactAddress heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
  }
]
const About = () => {
  return (
    <>
    {
      aboutSections.map((i) => {
        return (
          <PageWrapper key={i}>
          {i.section}
          </PageWrapper>
        )
      })
    }
    </>
  )
}

export default About