
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface GuestConfirmation {
  id: string;
  name: string;
  confirmed: boolean;
  created_at: string;
}

const Admin = () => {
  const [confirmations, setConfirmations] = useState<GuestConfirmation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();

  // Redirect if not authenticated
  if (!authLoading && !user) {
    return <Navigate to="/auth" replace />;
  }

  const fetchConfirmations = async () => {
    try {
      const { data, error } = await supabase
        .from('guest_confirmations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setConfirmations(data || []);
    } catch (error) {
      console.error('Error fetching confirmations:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar confirmações.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchConfirmations();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
  };

  const confirmedCount = confirmations.filter(c => c.confirmed).length;
  const notConfirmedCount = confirmations.filter(c => !c.confirmed).length;

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-wedding-cream flex items-center justify-center">
        <div className="text-wedding-gray">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wedding-cream p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light text-wedding-gray">
            Dashboard Admin - Confirmações
          </h1>
          <Button onClick={handleSignOut} variant="outline">
            Sair
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Confirmados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{confirmedCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Não Confirmados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{notConfirmedCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-wedding-gray">Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-wedding-gray">{confirmations.length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Confirmações</CardTitle>
          </CardHeader>
          <CardContent>
            {confirmations.length === 0 ? (
              <p className="text-center text-wedding-gray/60 py-8">
                Nenhuma confirmação recebida ainda.
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {confirmations.map((confirmation) => (
                    <TableRow key={confirmation.id}>
                      <TableCell className="font-medium">
                        {confirmation.name}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          confirmation.confirmed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {confirmation.confirmed ? '✓ Confirmado' : '✗ Não Confirmado'}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(confirmation.created_at).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
