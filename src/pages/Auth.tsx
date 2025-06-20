import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, signIn, signUp } = useAuth();
  const { toast } = useToast();

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = isSignUp 
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        toast({
          title: "Erro de autenticação",
          description: error.message,
          variant: "destructive",
        });
      } else if (isSignUp) {
        toast({
          title: "Conta criada!",
          description: "Verifique seu email para confirmar a conta.",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-white to-wedding-cream">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-brittany text-4xl md:text-6xl text-dress-dark-gray mb-4 leading-none">
            Talyta & Thalisson
          </h1>
          <p className="text-wedding-gray font-light tracking-wide text-sm">
            NOSSA MAIOR AVENTURA
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-white/80 backdrop-blur-sm wedding-shadow border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-light text-dress-dark-gray tracking-wide">
              {isSignUp ? 'Criar Conta Admin' : 'Acesso Admin'}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 bg-white/60 border-wedding-gray/30 focus:border-dress-dark-gray focus:ring-0 focus:outline-none text-dress-dark-gray placeholder:text-wedding-gray font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={6}
                  className="h-12 bg-white/60 border-wedding-gray/30 focus:border-dress-dark-gray focus:ring-0 focus:outline-none text-dress-dark-gray placeholder:text-wedding-gray font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-dress-dark-gray hover:bg-dress-black text-white font-light tracking-wide transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Carregando...' : (isSignUp ? 'Criar Conta' : 'Entrar')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-wedding-gray hover:text-dress-dark-gray font-light transition-colors duration-300"
                disabled={isLoading}
              >
                {isSignUp ? 'Já tem conta? Faça login' : 'Não tem conta? Criar uma'}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-wedding-gray text-xs font-light tracking-widest">
            29 DE NOVEMBRO DE 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
