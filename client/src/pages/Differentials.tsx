import { Link } from 'wouter';
import { ArrowRight, Award, Users, Zap, Truck, Shield, Lightbulb } from 'lucide-react';

/**
 * Página Diferenciais - MFIX Fixadores
 * Design: Industrial Minimalista
 * Objetivo: Destacar o valor da MFIX
 */

export default function Differentials() {
  const differentials = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'Produtos de Qualidade',
      description: 'Todos os nossos fixadores seguem rigorosos padrões técnicos e industriais, garantindo confiabilidade em cada aplicação.',
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Atendimento Comercial Especializado',
      description: 'Nossa equipe é treinada para entender suas necessidades e oferecer as melhores soluções em fixação.',
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: 'Agilidade no Atendimento e Entrega',
      description: 'Processamos seus pedidos rapidamente e garantimos entrega no prazo combinado.',
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Parcerias Confiáveis',
      description: 'Trabalhamos com os melhores fornecedores do mercado para garantir qualidade e consistência.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: 'Soluções para Empresas e Indústrias',
      description: 'Oferecemos soluções customizadas para diferentes segmentos e aplicações industriais.',
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: 'Suporte Técnico Contínuo',
      description: 'Disponibilizamos orientação técnica para ajudar na escolha do melhor produto para sua aplicação.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Diferenciais</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            O que nos torna a melhor escolha para suas necessidades
          </p>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Por Que Escolher a MFIX?</h2>
            <p className="section-subtitle">
              Conheça os diferenciais que nos destacam no mercado de fixadores industriais
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <p className="text-lg text-foreground leading-relaxed">
              A MFIX Fixadores se destaca no mercado por oferecer muito mais do que apenas produtos. 
              Oferecemos soluções completas, atendimento personalizado e parceria duradoura com nossos clientes. 
              Cada diferencial foi desenvolvido com base em anos de experiência e comprometimento com a excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Differentials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary hover:translate-y-[-4px]"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground text-center mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Nosso Compromisso com Você</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Qualidade Sem Compromissos</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Cada produto que sai de nossas operações passa por rigoroso controle de qualidade. 
                  Não aceitamos padrões mediocres – apenas excelência.
                </p>
                <p className="text-foreground leading-relaxed">
                  Nossos fixadores são testados para resistência, durabilidade e conformidade com normas 
                  técnicas internacionais.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Parceria Duradoura</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Não somos apenas fornecedores – somos parceiros no sucesso de seus projetos. 
                  Investimos em relacionamentos de longo prazo.
                </p>
                <p className="text-foreground leading-relaxed">
                  Sua satisfação é nossa prioridade, e estamos sempre disponíveis para ajudar com 
                  orientação técnica e suporte contínuo.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-primary my-12 pt-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Diferenciais Operacionais</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-foreground">Conformidade com Padrões</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <p className="text-foreground">Atendimento Rápido</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+15 anos</div>
                  <p className="text-foreground">Experiência no Mercado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Why Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Por Que Confiar na MFIX?</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Experiência Comprovada</h3>
                  <p className="text-muted-foreground">
                    Mais de 15 anos de experiência no mercado de fixadores industriais, atendendo 
                    clientes em todo o Brasil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Equipe Especializada</h3>
                  <p className="text-muted-foreground">
                    Profissionais treinados e preparados para oferecer soluções técnicas adequadas 
                    para cada aplicação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Produtos Certificados</h3>
                  <p className="text-muted-foreground">
                    Todos os nossos fixadores seguem padrões técnicos internacionais e são testados 
                    rigorosamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Atendimento ao Cliente</h3>
                  <p className="text-muted-foreground">
                    Disponibilidade 24h para atender suas dúvidas e oferecer suporte técnico contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experimente a Diferença MFIX
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Solicite um orçamento e descubra por que somos a escolha preferida de empresas 
            em todo o Brasil.
          </p>
          <Link href="/contato">
            <a className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
