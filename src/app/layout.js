import Footer from '@/constant/Footer/Footer';
import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/constant/Navbar/Header';
import BottomBar from '@/constant/BottomBar/BottomBar';
import WhatsApp from '@/constant/FAB/WhatsApp';

const nunito = Nunito({ 
  weight: ['200','300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap'
 });

export const metadata = {
  title: 'Viseltech - Processos simples, resultados gigantes.',
  description: 'A ViselTech é uma startup que oferece soluções de inteligência artificial, hiperautomação, e automação de processos robóticos (RPA) para empresas de todos os tamanhos. Nossas soluções ajudam a aumentar a eficiência, reduzir custos e melhorar a experiência do cliente.',
  verification: {
    other: { 'fl-verify': '9be66eef7379e3946a735731ecf2c665' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <BottomBar />
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
