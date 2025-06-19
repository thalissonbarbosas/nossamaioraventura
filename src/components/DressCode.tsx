
const DressCode = () => {
  const mensColors = ['#000000', '#737373', '#b9b9b9', '#f5f5f5'];
  const mothersColors = ['#79695d', '#ae9c8f', '#c9c0ae'];
  const bridesmaidsColors = ['#f1e6b1', '#fdfadb'];

  return (
    <section className="py-16 px-6 bg-wedding-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-12 tracking-wide">
          Dress Code: Passeio Completo
        </h2>
        
        <div className="space-y-12">
          {/* Dress code illustration */}
          <div className="flex justify-center space-x-12 mb-12">
            {/* Male figure placeholder */}
            <div className="text-center">
              <div className="w-20 h-32 bg-gradient-to-b from-dress-dark-gray to-dress-black rounded-lg mb-4 mx-auto flex items-end justify-center pb-2">
                <div className="text-wedding-white text-xs">♂</div>
              </div>
              <p className="text-wedding-gray text-sm font-light">Masculino</p>
            </div>
            
            {/* Female figure placeholder */}
            <div className="text-center">
              <div className="w-20 h-32 bg-gradient-to-b from-bridesmaids-cream to-bridesmaids-yellow rounded-lg mb-4 mx-auto flex items-end justify-center pb-2">
                <div className="text-wedding-gray text-xs">♀</div>
              </div>
              <p className="text-wedding-gray text-sm font-light">Feminino</p>
            </div>
          </div>
          
          {/* Color palettes */}
          <div className="space-y-8">
            {/* Pais */}
            <div className="text-center">
              <h3 className="text-lg font-light text-wedding-gray mb-4">Sugestões - Pais</h3>
              <div className="flex justify-center space-x-3">
                {mensColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Mães */}
            <div className="text-center">
              <h3 className="text-lg font-light text-wedding-gray mb-4">Sugestões - Mães</h3>
              <div className="flex justify-center space-x-3">
                {mothersColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Madrinhas */}
            <div className="text-center">
              <h3 className="text-lg font-light text-wedding-gray mb-4">Sugestões - Madrinhas</h3>
              <div className="flex justify-center space-x-3">
                {bridesmaidsColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-wedding-cream shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
