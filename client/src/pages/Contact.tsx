import { useState } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';

/**
 * Página Contato - MFIX Fixadores
 * Design: Industrial Minimalista
 * Objetivo: Facilitar o contato com clientes
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Solicite seu orçamento sem compromisso
          </p>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Telefone / WhatsApp</h3>
              </div>
              <p className="text-foreground text-lg font-semibold">(11) 95982-4138</p>
              <p className="text-muted-foreground text-sm mt-2">Disponível para ligações e WhatsApp</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Endereço</h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                Av. Salim Farah Maluf, 3922<br />
                Quarta Parada – São Paulo/SP<br />
                CEP 03304-090
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-bold text-foreground">CNPJ</h3>
              </div>
              <p className="text-foreground text-lg font-semibold">42.600.971/0001-12</p>
              <p className="text-muted-foreground text-sm mt-2">Razão Social: MFIX FIXADORES LTDA</p>
            </div>
          </div>

          {/* Red Line Divider */}
          <div className="h-1 bg-primary my-16"></div>

          {/* Form and Message */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Outras Formas de Contato</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-3">WhatsApp</h3>
                  <p className="text-foreground mb-4">
                    Envie uma mensagem direta pelo WhatsApp para uma resposta mais rápida.
                  </p>
                  <a
                    href="https://wa.me/5511959824138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    Abrir WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-3">Horário de Atendimento</h3>
                  <p className="text-foreground">
                    Segunda a Sexta: 08:00 - 18:00<br />
                    Sábado: 08:00 - 13:00<br />
                    Domingo: Fechado
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-lg text-foreground mb-3">Informações Importantes</h3>
                  <p className="text-foreground leading-relaxed">
                    Entre em contato e solicite seu orçamento sem compromisso. Nossa equipe está 
                    pronta para ajudar com orientação técnica e soluções personalizadas para suas 
                    necessidades em fixadores industriais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Line Divider */}
      <div className="h-1 bg-primary"></div>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Localização</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2934876543213!2d-46.4789!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6d4e4e4e4e4d%3A0x4e4e4e4e4e4e4e4e!2sAv.%20Salim%20Farah%20Maluf%2C%203922%20-%20Quarta%20Parada%2C%20S%C3%A3o%20Paulo%20-%20SP%2003304-090!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
