import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container text-center py-20">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-foreground mb-4">Página Não Encontrada</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300">
            Voltar à Página Inicial
            <ArrowRight className="w-5 h-5" />
          </a>
        </Link>
      </div>
    </div>
  );
}
