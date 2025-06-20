import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

type SortField = 'name' | 'confirmed' | 'created_at';
type SortOrder = 'asc' | 'desc';

const Admin = () => {
  const [confirmations, setConfirmations] = useState<GuestConfirmation[]>([]);
  const [filteredConfirmations, setFilteredConfirmations] = useState<GuestConfirmation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const { user, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();

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

  // Filter and sort confirmations
  useEffect(() => {
    const filtered = confirmations.filter(confirmation =>
      confirmation.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: string | boolean | Date;
      let bValue: string | boolean | Date;

      switch (sortField) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'confirmed':
          aValue = a.confirmed;
          bValue = b.confirmed;
          break;
        case 'created_at':
          aValue = new Date(a.created_at);
          bValue = new Date(b.created_at);
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredConfirmations(filtered);
  }, [confirmations, searchTerm, sortField, sortOrder]);

  useEffect(() => {
    if (user) {
      fetchConfirmations();
    }
  }, [user]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleDeleteConfirmation = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja excluir a confirmação de "${name}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('guest_confirmations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Confirmação excluída",
        description: `A confirmação de "${name}" foi removida com sucesso.`,
      });

      // Refresh the data
      await fetchConfirmations();
    } catch (error) {
      console.error('Error deleting confirmation:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir confirmação.",
        variant: "destructive",
      });
    }
  };

  const confirmedCount = confirmations.filter(c => c.confirmed).length;
  const notConfirmedCount = confirmations.filter(c => !c.confirmed).length;

  // Redirect if not authenticated (moved after hooks to fix linter error)
  if (!authLoading && !user) {
    return <Navigate to="/auth" replace />;
  }

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-white to-wedding-cream">
          <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 video-overlay"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in">
          <div className="text-dress-dark-gray text-lg font-light">Carregando...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-white to-wedding-cream">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-brittany text-4xl md:text-6xl text-dress-dark-gray mb-6 leading-none">
              Talyta & Thalisson
            </h1>
            <p className="text-wedding-gray font-light tracking-wide text-sm mb-8">
              NOSSA MAIOR AVENTURA
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-md mx-auto">
              <h2 className="text-xl font-light text-dress-dark-gray tracking-wide">
                Dashboard Admin
              </h2>
              <Button 
                onClick={handleSignOut} 
                variant="outline"
                className="bg-white/60 border-wedding-gray/30 hover:bg-white/80 text-dress-dark-gray font-light transition-all duration-300"
              >
                Sair
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm wedding-shadow border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-700 font-light tracking-wide text-lg">
                  Confirmados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light text-emerald-700">{confirmedCount}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm wedding-shadow border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-red-700 font-light tracking-wide text-lg">
                  Não Confirmados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light text-red-700">{notConfirmedCount}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm wedding-shadow border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-dress-dark-gray font-light tracking-wide text-lg">
                  Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light text-dress-dark-gray">{confirmations.length}</div>
              </CardContent>
            </Card>
          </div>

          {/* Confirmations Table */}
          <Card className="bg-white/80 backdrop-blur-sm wedding-shadow border-0">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <CardTitle className="text-dress-dark-gray font-light tracking-wide text-xl">
                  Lista de Confirmações
                </CardTitle>
                <div className="flex flex-col sm:flex-row gap-3 items-center lg:w-1/3">
                  <div className="flex-1 w-full">
                    <Input
                      placeholder="Pesquisar por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-10 bg-white/60 border-wedding-gray/30 focus:border-dress-dark-gray focus:ring-0 focus:outline-none text-dress-dark-gray placeholder:text-wedding-gray font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="text-xs text-wedding-gray font-light whitespace-nowrap">
                    {filteredConfirmations.length} de {confirmations.length}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {filteredConfirmations.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-wedding-gray font-light text-lg">
                    {searchTerm ? 'Nenhum resultado encontrado.' : 'Nenhuma confirmação recebida ainda.'}
                  </p>
                  <p className="text-wedding-gray/60 font-light text-sm mt-2">
                    {searchTerm ? 'Tente ajustar sua pesquisa.' : 'As confirmações dos convidados aparecerão aqui.'}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-wedding-gray/20">
                        <TableHead 
                          className="font-light text-dress-dark-gray cursor-pointer hover:text-dress-black transition-colors select-none"
                          onClick={() => handleSort('name')}
                        >
                          Nome {getSortIcon('name')}
                        </TableHead>
                        <TableHead 
                          className="font-light text-dress-dark-gray cursor-pointer hover:text-dress-black transition-colors select-none"
                          onClick={() => handleSort('confirmed')}
                        >
                          Status {getSortIcon('confirmed')}
                        </TableHead>
                        <TableHead 
                          className="font-light text-dress-dark-gray cursor-pointer hover:text-dress-black transition-colors select-none"
                          onClick={() => handleSort('created_at')}
                        >
                          Data {getSortIcon('created_at')}
                        </TableHead>
                        <TableHead className="font-light text-dress-dark-gray w-16 text-center">
                          Ações
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredConfirmations.map((confirmation) => (
                        <TableRow key={confirmation.id} className="border-wedding-gray/10 hover:bg-white/40 transition-colors duration-300">
                          <TableCell className="font-light text-dress-dark-gray">
                            {confirmation.name}
                          </TableCell>
                          <TableCell>
                            <span className={`px-3 py-1 rounded-full text-xs font-light ${
                              confirmation.confirmed 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {confirmation.confirmed ? '✓ Confirmado' : '✗ Não Confirmado'}
                            </span>
                          </TableCell>
                          <TableCell className="font-light text-wedding-gray">
                            {new Date(confirmation.created_at).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </TableCell>
                          <TableCell className="text-center">
                            <button
                              onClick={() => handleDeleteConfirmation(confirmation.id, confirmation.name)}
                              className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-full transition-all duration-300 font-light"
                              title={`Excluir confirmação de ${confirmation.name}`}
                            >
                              🗑️
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-wedding-gray text-xs font-light tracking-widest">
              29 DE NOVEMBRO DE 2025 · NOSSA MAIOR AVENTURA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
