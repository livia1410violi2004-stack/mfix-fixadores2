import { Link } from 'wouter';
import { ArrowRight, Wrench } from 'lucide-react';

/**
 * Página Produtos - MFIX Fixadores
 * Design: Industrial Minimalista
 * Objetivo: Apresentar o portfólio da empresa
 */

export default function Products() {
  const categories = [
    {
      title: 'Parafusos',
      description: 'Ampla variedade de parafusos para diferentes aplicações industriais',
      details: [
        'Parafusos de máquina',
        'Parafusos de cabeça cilíndrica',
        'Parafusos de cabeça chata',
        'Parafusos auto-atarraxantes',
        'Parafusos especiais sob demanda',
      ],
      applications: 'Construção civil, estruturas metálicas, manutenção industrial',
    },
    {
      title: 'Porcas',
      description: 'Porcas de qualidade para fixação segura e confiável',
      details: [
        'Porcas sextavadas',
        'Porcas quadradas',
        'Porcas borboleta',
        'Porcas de travamento',
        'Porcas especiais',
      ],
      applications: 'Indústrias em geral, estruturas metálicas, equipamentos',
    },
    {
      title: 'Arruelas',
      description: 'Arruelas para distribuição de carga e proteção de superfícies',
      details: [
        'Arruelas planas',
        'Arruelas de pressão',
        'Arruelas de travamento',
        'Arruelas cônicas',
        'Arruelas especiais',
      ],
      applications: 'Todas as aplicações de fixação, proteção de superfícies',
    },
    {
      title: 'Fixadores Especiais',
      description: 'Soluções customizadas para aplicações únicas e desafiadoras',
      details: [
        'Rebites',
        'Pinos',
        'Parafusos de cabeça especial',
        'Fixadores sob medida',
        'Soluções customizadas',
      ],
      applications: 'Aplicações especializadas, projetos customizados',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Produtos</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Soluções completas em fixadores industriais
          </p>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Portfólio Completo de Fixadores</h2>
            <p className="section-subtitle">
              A MFIX oferece uma ampla gama de fixadores industriais para atender às mais diversas necessidades
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Nossa linha de produtos inclui parafusos, porcas, arruelas e fixadores especiais, 
              todos seguindo rigorosos padrões técnicos e industriais. Cada produto é selecionado 
              e testado para garantir qualidade e confiabilidade.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Independentemente da sua aplicação – seja em construção civil, indústrias em geral, 
              estruturas metálicas ou manutenção industrial – temos a solução certa para você.
            </p>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">{category.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3">Tipos disponíveis:</h4>
                  <ul className="space-y-2">
                    {category.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-primary mb-2">Aplicações:</h4>
                  <p className="text-muted-foreground">{category.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Padrões de Qualidade</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Certificações</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Padrões técnicos internacionais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Controle rigoroso de qualidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Testes de resistência e durabilidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Conformidade com normas industriais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Confiabilidade garantida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Durabilidade comprovada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Compatibilidade com aplicações industriais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Suporte técnico especializado</span>
                  </li>
                </ul>
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
            Solicite um Orçamento Personalizado
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Não encontrou exatamente o que procura? Nossa equipe pode ajudar com soluções customizadas 
            para suas necessidades específicas.
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
