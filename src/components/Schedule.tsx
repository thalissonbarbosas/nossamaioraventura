
const Schedule = () => {
  return (
    <section className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-6 text-center tracking-wide">
          Cronograma
        </h2>
        
        <div className="space-y-4">
          {/* Cerimônia */}
          <div className="bg-wedding-white p-8 wedding-shadow animate-slide-in">
            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-medium text-wedding-gray mb-1">
                Cerimônia
              </h3>
                <p className="text-wedding-gray font-light mb-4">
                  Capela Mater Dolorosa<br />
                  Rua Gabriel Ferreira, 743 - Centro
                </p>
                <p className="text-wedding-gray font-light">Sábado às 9h30</p>
              </div>
            
            <div className="space-y-6">
              <div className="text-center">
                
                
                {/* Church image */}
                <div className="max-w-lg h-80 mx-auto mb-4 bg-cover bg-center" 
                     style={{backgroundImage: "url('/images/cerimonia.png')"}}>
                </div>

              </div>
              
              {/* Map */}
              <div className="h-48">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.119486256286!2d-42.81659252410759!3d-5.0843714948925225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39da1fbdcacb%3A0x620445c22151ece1!2sCapela%20Mater%20Dolorosa%20Dom%20Barreto!5e0!3m2!1spt-BR!2sbr!4v1750380176785!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Cerimônia">
                </iframe>
              </div>
            </div>
          </div>
          
          {/* Recepção */}
          <div className="bg-wedding-white p-8 wedding-shadow animate-slide-in">
            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-medium text-wedding-gray mb-1">
                Recepção
              </h3>
              <p className="text-wedding-gray font-light">Sábado às 12h</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-wedding-gray font-light mb-4">
                  Restaurante Grand Gru<br />
                  Avenida Ininga, 996 - Fátima
                </p>
                
                {/* Restaurant image */}
                <div className="max-w-lg h-80 mx-auto mb-4 bg-cover bg-center" 
                     style={{backgroundImage: "url('/images/recepcao.png')"}}>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-48 mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4651837392754!2d-42.81234848525116!3d-5.067890294839779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39c5b8b5b8b5b%3A0x1234567890abcdef!2sAv.%20Ininga%2C%20996%20-%20F%C3%A1tima%2C%20Teresina%20-%20PI!5e0!3m2!1spt-BR!2sbr!4v1750380176785!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Recepção">
                </iframe>
              </div>
              
              {/* Menu button */}
              <div className="text-center">
                <button className="bg-wedding-gray text-wedding-white px-8 py-3 font-light tracking-wide hover:opacity-90 transition-opacity">
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
