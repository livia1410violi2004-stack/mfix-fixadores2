import { Link } from 'wouter';
import { ArrowRight, Building2, Factory, Hammer, Wrench } from 'lucide-react';

/**
 * Página Segmentos - MFIX Fixadores
 * Design: Industrial Minimalista
 * Objetivo: Mostrar abrangência de atuação
 */

export default function Segments() {
  const segments = [
    {
      icon: <Building2 className="w-16 h-16 text-primary" />,
      title: 'Construção Civil',
      description: 'Fixadores para estruturas, acabamentos e sistemas construtivos',
      applications: [
        'Estruturas de concreto e aço',
        'Sistemas de fachada',
        'Instalações hidráulicas e elétricas',
        'Acabamentos e revestimentos',
        'Estruturas de cobertura',
      ],
    },
    {
      icon: <Factory className="w-16 h-16 text-primary" />,
      title: 'Indústrias em Geral',
      description: 'Soluções em fixação para diversos processos industriais',
      applications: [
        'Máquinas e equipamentos',
        'Linhas de produção',
        'Sistemas de automação',
        'Montagem de componentes',
        'Manutenção preventiva',
      ],
    },
    {
      icon: <Hammer className="w-16 h-16 text-primary" />,
      title: 'Estruturas Metálicas',
      description: 'Fixadores especializados para estruturas e construções metálicas',
      applications: [
        'Estruturas de aço',
        'Galpões e pavilhões',
        'Pontes e passarelas',
        'Torres e estruturas elevadas',
        'Sistemas de suporte',
      ],
    },
    {
      icon: <Wrench className="w-16 h-16 text-primary" />,
      title: 'Manutenção Industrial',
      description: 'Fixadores para manutenção, reparo e substituição de componentes',
      applications: [
        'Manutenção preventiva',
        'Reparo de equipamentos',
        'Substituição de componentes',
        'Modernização de sistemas',
        'Serviços técnicos',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Segmentos Atendidos</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Soluções em fixação para diversos segmentos da indústria
          </p>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Abrangência de Atuação</h2>
            <p className="section-subtitle">
              A MFIX atua em diversos segmentos, oferecendo soluções especializadas para cada aplicação
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <p className="text-lg text-foreground leading-relaxed">
              Com mais de 15 anos de experiência, a MFIX desenvolveu expertise em diferentes segmentos 
              da indústria. Nossos fixadores são utilizados em projetos de grande relevância, desde 
              construções civis até aplicações industriais complexas.
            </p>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Segments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">{segment.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{segment.title}</h3>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">{segment.description}</p>

                <div>
                  <h4 className="font-bold text-primary mb-4">Aplicações principais:</h4>
                  <ul className="space-y-2">
                    {segment.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Why Choose MFIX */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Por Que a MFIX para Seu Segmento?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Experiência Setorial</h3>
                <p className="text-foreground leading-relaxed">
                  Conhecimento profundo das necessidades específicas de cada segmento, com soluções 
                  adaptadas e personalizadas.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Qualidade Comprovada</h3>
                <p className="text-foreground leading-relaxed">
                  Fixadores testados e aprovados em aplicações reais, garantindo confiabilidade 
                  e durabilidade.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Suporte Técnico</h3>
                <p className="text-foreground leading-relaxed">
                  Orientação especializada para escolher o fixador ideal para sua aplicação específica.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Entrega Confiável</h3>
                <p className="text-foreground leading-relaxed">
                  Logística eficiente e pontual, garantindo que seus fixadores cheguem quando necessário.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-primary pt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Casos de Sucesso</h3>
              <p className="text-foreground leading-relaxed mb-4">
                A MFIX tem o privilégio de fornecer fixadores para diversos projetos de grande 
                relevância em construção civil, indústrias e estruturas metálicas.
              </p>
              <p className="text-foreground leading-relaxed">
                Nossos clientes confiam em nós para projetos críticos, onde qualidade e confiabilidade 
                são essenciais. Cada projeto bem-sucedido reforça nosso compromisso com a excelência.
              </p>
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
            Sua Solução em Fixação Está Aqui
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Independentemente do seu segmento, temos a expertise e os produtos certos para suas necessidades.
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
