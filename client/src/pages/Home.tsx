import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Zap, Users, Truck } from 'lucide-react';

/**
 * Página Home - MFIX Fixadores
 * Design: Industrial Minimalista com Tipografia Forte
 * Cores: Branco, Vermelho (#DC2626), Preto (#1F2937)
 * Tipografia: Poppins Bold para títulos, Inter para body
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-fixadores.jpg)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            MFIX Fixadores
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Soluções em Fixação com Qualidade, Segurança e Agilidade
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contato">
              <a className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
            <a
              href="https://wa.me/5511959824138"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Sobre a MFIX Fixadores</h2>
            <p className="section-subtitle">
              Especializada em fixadores industriais de qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                A MFIX Fixadores LTDA é uma empresa consolidada no mercado de fixadores industriais, 
                oferecendo soluções completas em parafusos, porcas, arruelas e fixadores especiais 
                para os mais diversos segmentos.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Nosso compromisso é fornecer produtos de qualidade garantida, com atendimento 
                especializado e agilidade na entrega, atendendo empresas e indústrias em todo o Brasil.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Qualidade Garantida</h3>
                    <p className="text-muted-foreground">Produtos que seguem padrões técnicos e industriais</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Atendimento Especializado</h3>
                    <p className="text-muted-foreground">Equipe preparada para orientar suas necessidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Agilidade na Entrega</h3>
                    <p className="text-muted-foreground">Soluções rápidas e eficientes para seus projetos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/products-section.jpg"
                alt="Produtos MFIX"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Diferenciais Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="section-subtitle">
              O que nos torna a melhor escolha para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12 text-primary" />,
                title: 'Qualidade Premium',
                description: 'Produtos de alta qualidade com certificações e padrões internacionais',
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: 'Atendimento Dedicado',
                description: 'Equipe especializada pronta para atender suas demandas específicas',
              },
              {
                icon: <Truck className="w-12 h-12 text-primary" />,
                title: 'Entrega Rápida',
                description: 'Logística eficiente para garantir seus produtos no prazo',
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: 'Soluções Inovadoras',
                description: 'Fixadores especiais para aplicações únicas e desafiadoras',
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-primary" />,
                title: 'Parcerias Confiáveis',
                description: 'Relacionamento duradouro com os melhores fornecedores',
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: 'Suporte Técnico',
                description: 'Orientação técnica para escolher o melhor produto para sua aplicação',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite seu orçamento sem compromisso. 
            Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contato">
              <a className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
            <a
              href="https://wa.me/5511959824138"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Conversar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
