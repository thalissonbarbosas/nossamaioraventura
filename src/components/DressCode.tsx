import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const DressCode = () => {
  const mensColors = ['bg-dress-black', 'bg-dress-dark-gray', 'bg-dress-light-gray', 'bg-dress-off-white'];
  const mothersColors = ['bg-mothers-brown', 'bg-mothers-tan', 'bg-mothers-beige'];
  const bridesmaidsColors = ['bg-bridesmaids-yellow', 'bg-bridesmaids-cream'];

  return (
    <section className="py-16 px-6 bg-wedding-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-8 tracking-wide">
          Dress Code: Passeio Completo
        </h2>
        
        {/* Dress code image and figures side by side */}
        <div className="flex justify-center items-center mb-12">
          {/* Dress code image */}
          <img 
            src="/images/dresscode.jpeg" 
            alt="Dress Code - Passeio Completo" 
            className="max-w-md h-80 object-cover"
          />
        </div>
        
        <div className="space-y-12">          
          {/* Color suggestions with tabs */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-light text-wedding-gray mb-6">Sugestões de Cores</h3>
            <Tabs defaultValue="pais" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-wedding-cream">
                <TabsTrigger 
                  value="pais" 
                  className="text-wedding-gray data-[state=active]:bg-dress-dark-gray data-[state=active]:text-wedding-white"
                >
                  Pais / Padrinhos
                </TabsTrigger>
                <TabsTrigger 
                  value="maes"
                  className="text-wedding-gray data-[state=active]:bg-dress-dark-gray data-[state=active]:text-wedding-white"
                >
                  Mães
                </TabsTrigger>
                <TabsTrigger 
                  value="madrinhas"
                  className="text-wedding-gray data-[state=active]:bg-dress-dark-gray data-[state=active]:text-wedding-white"
                >
                  Madrinhas
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pais" className="mt-6">
                <div className="flex justify-center space-x-3">
                  {mensColors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm ${color}`}
                    ></div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="maes" className="mt-6">
                <div className="flex justify-center space-x-3">
                  {mothersColors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm ${color}`}
                    ></div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="madrinhas" className="mt-6">
                <div className="flex justify-center space-x-3">
                  {bridesmaidsColors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm ${color}`}
                    ></div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
