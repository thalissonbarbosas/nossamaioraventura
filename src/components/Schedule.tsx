
const Schedule = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-8 text-center tracking-wide">
          Cronograma
        </h2>
        
        <div className="space-y-4">
          {/* Cerimônia */}
          <div className="bg-wedding-white p-8 wedding-shadow animate-slide-in">
            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-medium text-wedding-gray mb-1">
                Cerimônia
              </h3>
              <p className="text-wedding-gray font-light">Sábado às 9h30</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-wedding-gray font-light mb-4">
                  Capela Mater Dolorosa<br />
                  Rua Gabriel Ferreira, 743 - Centro
                </p>
                
                {/* Church image */}
                <div className="w-32 h-24 mx-auto mb-4 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://drive.google.com/uc?export=view&id=1icJePviHTNsGNdms7lAUjflVGVNzdIxE')"}}>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-48">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d-42.123456789!3d-5.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDcnMjQuNCJTIDQywrAwNycyNC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
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
                <div className="w-32 h-24 mx-auto mb-4 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://drive.google.com/uc?export=view&id=1wLEkxIljZCkrgS25sSRl2VlK5ZqItxxK')"}}>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-48 mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d-42.789012345!3d-5.789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDcnMjQuNCJTIDQywrA0NycyNC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
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
