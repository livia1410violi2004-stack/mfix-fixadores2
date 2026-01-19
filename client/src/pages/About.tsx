import { Link } from 'wouter';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

/**
 * Página Sobre - MFIX Fixadores
 * Design: Industrial Minimalista
 * Objetivo: Gerar confiança e credibilidade
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre a MFIX</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Conhecendo nossa história, missão e valores
          </p>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Presentation */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="section-title">MFIX Fixadores LTDA</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              A MFIX Fixadores LTDA é uma empresa consolidada no mercado de fixadores industriais, 
              especializada no fornecimento de parafusos, porcas, arruelas e fixadores especiais 
              para os mais diversos segmentos da indústria.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Com sede em São Paulo, a MFIX atua há anos no mercado, construindo relacionamentos 
              sólidos com clientes e parceiros através de qualidade, confiabilidade e atendimento 
              diferenciado.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nosso compromisso é ser a escolha preferida para soluções em fixação, oferecendo 
              produtos de qualidade garantida, atendimento especializado e agilidade na entrega.
            </p>
          </div>

          {/* Red Line Divider */}
          <div className="h-1 bg-primary my-16"></div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Fornecer soluções em fixação de qualidade, com atendimento especializado e agilidade, 
                contribuindo para o sucesso de nossos clientes em seus projetos e operações.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Ser a empresa referência em fixadores industriais no mercado brasileiro, reconhecida 
                pela qualidade, confiabilidade e excelência no atendimento.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Valores</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Qualidade, Integridade, Confiabilidade, Eficiência e Comprometimento com a excelência 
                em tudo que fazemos.
              </p>
            </div>
          </div>

          {/* Red Line Divider */}
          <div className="h-1 bg-primary my-16"></div>

          {/* Company Info */}
          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Informações da Empresa</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">Razão Social</h3>
                <p className="text-foreground text-lg">MFIX FIXADORES LTDA</p>
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">CNPJ</h3>
                <p className="text-foreground text-lg">42.600.971/0001-12</p>
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">Atividade Principal</h3>
                <p className="text-foreground text-lg">Comércio atacadista de ferragens e ferramentas</p>
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">Situação Cadastral</h3>
                <p className="text-foreground text-lg">Ativa</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-bold text-primary text-lg mb-2">Endereço</h3>
                <p className="text-foreground text-lg">
                  Av. Salim Farah Maluf, 3922 – Quarta Parada – São Paulo/SP – CEP 03304-090
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Nosso Compromisso</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Na MFIX Fixadores, acreditamos que qualidade não é apenas um produto, mas um compromisso 
              com nossos clientes. Cada fixador que sai de nossas operações é resultado de rigoroso 
              controle de qualidade e atendimento dedicado.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Nosso objetivo é ser mais do que um fornecedor: somos parceiros no sucesso de seus projetos, 
              oferecendo soluções personalizadas, orientação técnica e suporte contínuo.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Confiamos que a qualidade e o atendimento diferenciado são as bases para construir 
              relacionamentos duradouros e mutuamente benéficos.
            </p>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça Nossos Produtos
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Explore nossa linha completa de fixadores industriais e descubra a solução ideal para sua aplicação.
          </p>
          <Link href="/produtos">
            <a className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Ver Produtos
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
