import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">MFIX</span>
                <span className="text-xs font-semibold">FIXADORES</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Soluções em fixação com qualidade, segurança e agilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b-2 border-primary pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-primary transition-colors">Início</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="text-gray-300 hover:text-primary transition-colors">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos">
                  <a className="text-gray-300 hover:text-primary transition-colors">Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-gray-300 hover:text-primary transition-colors">Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b-2 border-primary pb-2">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">(11) 95982-4138</p>
                  <p className="text-xs text-gray-400">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Av. Salim Farah Maluf, 3922<br />
                  Quarta Parada – São Paulo/SP<br />
                  CEP 03304-090
                </p>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b-2 border-primary pb-2">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-semibold">Razão Social:</span><br />
                MFIX FIXADORES LTDA
              </li>
              <li>
                <span className="font-semibold">CNPJ:</span><br />
                42.600.971/0001-12
              </li>
              <li>
                <span className="font-semibold">Situação:</span><br />
                Ativa
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} MFIX Fixadores LTDA. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://wa.me/5511959824138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
