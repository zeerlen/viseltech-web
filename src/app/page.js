import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import WeAre from "@/components/Home/WeAre/WeAre";
import WeMake from "@/components/Home/WeMake/WeMake";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import WeCan from "@/components/Home/WeCan/WeCan";
import ContactAddress from "@/components/ContactPage/ContactAddress";

export const metadata = {
  title: 'ViselTech - Processos simples, resultados gigantes.',
  description: 'A ViselTech é uma startup que oferece soluções de inteligência artificial, hiperautomação, e automação de processos robóticos (RPA) para empresas de todos os tamanhos. Nossas soluções ajudam a aumentar a eficiência, reduzir custos e melhorar a experiência do cliente.',
}

export default function Home() {
  const content = [
    {
      heading: "Hiperautomação",
      description:
      "Nossas soluções de hiperautomação vão além da simples automação RPA. Enquanto o RPA se concentra em automatizar tarefas repetitivas e isoladas, a hiperautomação integra RPA, IA, machine learning e analytics para automatizar processos de ponta a ponta, oferecendo uma automação inteligente. Essa integração permite maior agilidade, elimina ineficiências e cria um ambiente onde cada etapa opera de forma conectada, impulsionando a inovação e o crescimento sustentável do seu negócio.",
    },
    {
      heading: "Inteligência Artificial & IA Generativa",
      description:
        "Nossas soluções de IA e IA Generativa, aliadas aos nossos serviços especializados, entregam produtos digitais mais inteligentes, integrados e eficientes. Aumentamos a produtividade, otimizamos processos e criamos experiências inovadoras para seus clientes, proporcionando uma evolução real no desempenho do seu negócio e preparando-o para os desafios do futuro com tecnologia de ponta.",
    },
    {
      heading: "Automação de Processos Robóticos (RPA)",
      description:
        "Nossas soluções de RPA transformam tarefas manuais e repetitivas em processos automatizados, trazendo eficiência e precisão para seu negócio. Com a automação, sua equipe ganha mais tempo para focar em inovação e estratégia, enquanto os bots cuidam do trabalho operacional. Assim, você reduz custos, otimiza recursos e proporciona uma experiência mais fluida e ágil para seus clientes e colaboradores.",
    },
  ];

  const homeSections = [
    {
      page: (
        <Feature
          content={content}
          mainHeading={`Maximize o desempenho operacional integrando nossas <span class="highlight">soluções tecnológicas</span> em seus processos.`}
        />
      ),
    },
    {
      page: <WeAre />,
    },
    {
      page: <WeCan />,
    },
    {
      page: <WeMake />,
    },
    {
      page: <Prefer />,
    },
    {
      page: <CaseStudy />,
    },
    {
      page: <ContactAddress />,
    },
  ];
  return (
    <>
      <Hero />
      {homeSections.map((i, k) => {
        return <PageWrapper key={k}>{i.page}</PageWrapper>;
      })}
    </>
  );
}
