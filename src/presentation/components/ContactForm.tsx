'use client';

import { useState, FormEvent } from 'react';
import { apiClient } from '@/infrastructure/api';

type ContactMethod = 'email' | 'whatsapp';
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const WHATSAPP_NUMBER = '51970175133';
const WHATSAPP_MESSAGE = 'Hola, me gustaria contactarlos para obtener mas informacion.';

export function ContactForm() {
  const [method, setMethod] = useState<ContactMethod>('email');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayMethod, setDisplayMethod] = useState<ContactMethod>('email');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMethodChange = (newMethod: ContactMethod) => {
    if (newMethod === method) return;
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayMethod(newMethod);
      setMethod(newMethod);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full flex">
          <button
            onClick={() => handleMethodChange('email')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              method === 'email'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Correo
          </button>
          <button
            onClick={() => handleMethodChange('whatsapp')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              method === 'whatsapp'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            WhatsApp
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-out ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {displayMethod === 'email' ? (
          <>
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Nos pondremos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-zinc-900 dark:text-white underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
                />
                {status === 'error' && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            )}
          </>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              Contactanos directamente por WhatsApp para una respuesta mas rapida.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-medium"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </button>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              +51 970 175 133
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
