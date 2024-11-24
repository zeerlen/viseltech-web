"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CodeBracketSquareIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Automação de Processos e Desenvolvimento de Software',
    description:
      'Empresas que investem em automação de processos e desenvolvimento de software conseguem reduzir custos operacionais em até 30%, segundo um estudo da McKinsey & Company. Automatizar tarefas manuais permite que sua equipe foque no que realmente importa: inovação e crescimento. Nós ajudamos a criar soluções sob medida para atender às necessidades do seu negócio e do mercado atual.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Inteligência Artificial e Hiperautomação',
    description:
      'De acordo com a Gartner, até 2025, mais de 70% das organizações terão implementado alguma forma de hiperautomação para melhorar a eficiência dos negócios. Adotar tecnologias como Inteligência Artificial e RPA (Automatização Robótica de Processos) é um passo fundamental para competir no mercado global. Com nossas soluções de IA, ajudamos você a automatizar atividades repetitivas e a tomar decisões baseadas em dados reais, gerando resultados mais precisos e rápidos.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Contrate Nossos Especialistas em TI e Transformação Digital',
    description:
      'Muitos processos podem ser lentos e ineficientes, e empresas perdem oportunidades por não estarem preparadas para um mercado digital. Nossos especialistas são certificados e têm experiência prática em implementar soluções que trazem resultados reais. A PwC estima que a transformação digital pode aumentar em até 60% a eficiência de uma empresa, e nossa missão é ajudar você a atingir esse potencial.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Maximize Sua Eficiência e Cresça com Inovação',
    description:
      'Não se trata apenas de se modernizar, mas de transformar profundamente a forma como você opera. A automação e o uso de IA podem liberar sua equipe de tarefas repetitivas, permitindo maior foco em estratégias de crescimento e inovação. Conte conosco para transformar seu negócio e expandir suas fronteiras com tecnologia de ponta e especialistas que realmente entendem suas necessidades.',
    icon: UserGroupIcon,
  },
]

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function WeMake() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="app__container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-gray-900 text-center">
          Tornamos sua <span className='highlight'>Transformação Digital</span> uma realidade
          </p>
          <p className="mt-6 text-lg leading-8 app__text text-center">
          Quer aumentar a eficiência e se destacar no mercado com soluções modernas? A ViselTech está aqui para acelerar sua jornada na transformação digital, veja como:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.dl variants={variants} initial="hidden" whileInView="show" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div variants={items} key={feature.name} className="relative pl-24">
                <dt className="text-xl font-extrabold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white">
                    <feature.icon className="h-6 w-6 " aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 app__text">{feature.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  )
}
