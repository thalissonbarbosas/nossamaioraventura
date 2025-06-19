
const Schedule = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-12 text-center tracking-wide">
          Cronograma
        </h2>
        
        <div className="space-y-8">
          {/* Cerimônia */}
          <div className="bg-wedding-white rounded-2xl p-8 wedding-shadow animate-slide-in">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-wedding-gray mb-2">
                Cerimônia
              </h3>
              <p className="text-wedding-gray font-light">16:00h</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-wedding-gray font-light mb-4">
                  Igreja São Francisco de Assis<br />
                  Rua das Flores, 123 - Centro
                </p>
                
                {/* Placeholder for church illustration */}
                <div className="w-32 h-24 mx-auto bg-gradient-to-b from-wedding-cream to-wedding-gray rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-wedding-white text-xs">Igreja</div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-48 bg-wedding-cream rounded-xl flex items-center justify-center">
                <p className="text-wedding-gray text-sm">Mapa da Cerimônia</p>
              </div>
            </div>
          </div>
          
          {/* Recepção */}
          <div className="bg-wedding-white rounded-2xl p-8 wedding-shadow animate-slide-in">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-wedding-gray mb-2">
                Recepção
              </h3>
              <p className="text-wedding-gray font-light">18:00h</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-wedding-gray font-light mb-4">
                  Salão de Festas Elegance<br />
                  Avenida Principal, 456 - Jardins
                </p>
                
                {/* Placeholder for venue illustration */}
                <div className="w-32 h-24 mx-auto bg-gradient-to-b from-wedding-cream to-wedding-gray rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-wedding-white text-xs">Salão</div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-48 bg-wedding-cream rounded-xl flex items-center justify-center mb-4">
                <p className="text-wedding-gray text-sm">Mapa da Recepção</p>
              </div>
              
              {/* Menu button */}
              <div className="text-center">
                <button className="bg-wedding-gray text-wedding-white px-8 py-3 rounded-full font-light tracking-wide hover:opacity-90 transition-opacity">
                  Ver Cardápio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
