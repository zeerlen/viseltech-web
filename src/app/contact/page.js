import ContactAddress from "@/components/ContactPage/ContactAddress"
import { PageWrapper } from "../page-wrapper"

export const metadata = {
  title: 'Contato - ViselTech',
  description: 'A ViselTech é uma startup que oferece soluções de inteligência artificial, hiperautomação, e automação de processos robóticos (RPA) para empresas de todos os tamanhos. Nossas soluções ajudam a aumentar a eficiência, reduzir custos e melhorar a experiência do cliente.',
}
const Contact = () => {
  return (
    <>
    <PageWrapper>
    <ContactAddress/>
    </PageWrapper>
    </>
  )
}

export default Contact