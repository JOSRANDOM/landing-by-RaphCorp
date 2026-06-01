'use client';

import { useState, FormEvent } from 'react';
import { apiClient } from '@/infrastructure/api';

type ContactMethod = 'email' | 'whatsapp';
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const WHATSAPP_NUMBER = '51970175133';
const WHATSAPP_MESSAGE = 'Hola, me gustaría contactarlos para obtener más información.';

export function ContactForm() {
  const [method, setMethod] = useState<ContactMethod>('email');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      await apiClient.post('/contacts', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-[#0F1C3F] focus:border-[#5B8DFF] py-3 text-white text-sm placeholder-[#3B5080] focus:outline-none transition-colors duration-300 font-mono';

  return (
    <div className="w-full">
      <div className="flex border border-[#0F1C3F] mb-10 w-fit">
        <button
          onClick={() => setMethod('email')}
          className={`px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-200 ${
            method === 'email' ? 'bg-[#5B8DFF] text-[#04091C]' : 'text-[#7B8FBF] hover:text-white'
          }`}
        >
          Email
        </button>
        <button
          onClick={() => setMethod('whatsapp')}
          className={`px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-200 ${
            method === 'whatsapp' ? 'bg-[#5B8DFF] text-[#04091C]' : 'text-[#7B8FBF] hover:text-white'
          }`}
        >
          WhatsApp
        </button>
      </div>

      {method === 'email' ? (
        status === 'success' ? (
          <div className="py-10">
            <div className="w-10 h-10 border border-[#5B8DFF] flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#5B8DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold mb-2">Mensaje enviado</p>
            <p className="text-[#7B8FBF] text-sm mb-6 font-mono">Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-[11px] uppercase tracking-widest text-[#7B8FBF] hover:text-[#5B8DFF] transition-colors border-b border-[#7B8FBF] hover:border-[#5B8DFF] pb-0.5"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-none`}
            />
            {status === 'error' && (
              <p className="text-red-400 text-xs font-mono">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#5B8DFF] text-[#04091C] py-4 text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
            </button>
          </form>
        )
      ) : (
        <div className="space-y-8">
          <p className="text-[#7B8FBF] text-sm leading-relaxed font-mono">
            Contáctanos directamente por WhatsApp para una respuesta más rápida.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-4 border border-[#0F1C3F] hover:border-[#25D366] px-8 py-4 text-[#7B8FBF] hover:text-[#25D366] transition-all duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-widest font-medium">Abrir WhatsApp</p>
              <p className="text-[10px] font-mono opacity-60 mt-0.5">+51 970 175 133</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
