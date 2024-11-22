import image from '@/constant/Images/image'
import Image from 'next/image'

const Prefer = () => {
  return (
    <section className='py-24 sm:py-32 bg-slate-50'>
    <div className='app__container grid grid-cols-1 lg:grid-cols-2 gap-8'>
    <div className='mx-auto m-auto'>
    <Image src={image.webStrategy} alt='Digital Transformation'/>
    </div>
    <div>
    <h1 className='primary-heading'>Você se lembra da história do <span className='highlight'>coelho e da tartaruga?</span></h1>
    <p className='pt-12 pb-6 app__text'>Todo mundo acredita que a tartaruga venceu por ser trabalhadora e persistente, mas a verdade é que, se o coelho não tivesse se distraído, ele teria vencido a corrida facilmente. Você, cuidando de investimentos, inovação e produtividade ao mesmo tempo que gere o seu negócio, acaba se tornando como o coelho distraído. É aqui que a ViselTech entra na história, ajudando você a focar e a manter a velocidade. Seguimos ao seu lado, lembrando da sua capacidade e ajudando você a ser o mais eficiente e inovador do mercado!</p>
    <ul className='list-inside list-disc app__text'>
    <li>RPA e Hiperautomção: Automatizamos os processos repetitivos para que você não precise gastar tempo com tarefas manuais. Assim como o coelho, você é capaz de ser muito mais rápido e eficiente, e nossa solução de hiperautomção garante que nada saia do foco.</li>
    <br></br>
    <li>Inteligência Artificial aplicada: Oferecemos soluções de IA que ajudam você a tomar decisões com base em dados reais e relevantes. Com isso, você pode se concentrar no crescimento estratégico, enquanto a IA cuida da análise inteligente e da previsão de cenários, transformando você no coelho que não perde tempo.</li>
    <br></br>
    <li>Transformação Digital e Desenvolvimento de Soluções: Acreditamos que cada empresa tem seu ritmo, mas também sabemos que, para não ficar para trás, é necessário transformar os processos internos. Nós ajudamos você a adaptar sua empresa às exigências do mercado moderno, integrando tecnologias digitais e automação de forma ágil e eficiente.</li>
    </ul>
    </div>

    </div>
    </section>
  )
}

export default Prefer