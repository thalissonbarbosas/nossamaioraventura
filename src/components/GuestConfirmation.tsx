import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const GuestConfirmation = () => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (confirmed: boolean) => {
    if (!name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, insira seu nome completo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('guest_confirmations')
        .insert({
          name: name.toUpperCase().trim(),
          confirmed,
        });

      if (error) throw error;

      toast({
        title: confirmed ? "Presença confirmada!" : "Resposta registrada",
        description: confirmed 
          ? "Obrigado por confirmar sua presença. Te esperamos no grande dia!" 
          : "Sua resposta foi registrada. Obrigado por nos informar.",
      });

      setName('');
    } catch (error) {
      console.error('Error submitting confirmation:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 px-6 mt-2 bg-wedding-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-wedding-gray mb-8 tracking-wide">
          Confirme Sua Presença
        </h2>
        
        <p className="text-wedding-gray/80 mb-8 text-lg">
          Sua presença é muito importante para nós. Por favor, confirme se poderá estar conosco neste dia especial.
        </p>

        <div className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg py-6 border-2 border-wedding-gray/30 focus:border-wedding-gray bg-wedding-white text-wedding-gray placeholder:text-wedding-gray/60 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleSubmit(true)}
              disabled={isSubmitting}
              className="bg-wedding-gray hover:bg-dress-dark-gray text-wedding-white px-8 py-6 text-lg font-light tracking-wide transition-colors"
            >
              ✓ Confirmo Presença
            </Button>
            
            <Button
              onClick={() => handleSubmit(false)}
              disabled={isSubmitting}
              className="bg-wedding-gray/20 hover:bg-wedding-gray/30 text-wedding-gray px-8 py-6 text-lg font-light tracking-wide transition-colors"
            >
              ✗ Não Poderei Ir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestConfirmation;
