import React, { useState } from 'react';
import { Calendar, Clock, Heart, Mail, MapPin, Menu, Phone, X, CheckCircle, AlertCircle } from 'lucide-react';

// Types
type MassageService = {
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  color: string;
};

type BookingFormData = {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

// Services data
const services: MassageService[] = [
  {
    name: "Massage aux pierres chaudes",
    description: "Combine la chaleur apaisante des pierres volcaniques avec des techniques de massage pour détendre en profondeur les muscles et calmer l'esprit. Idéal pour soulager les tensions et favoriser la circulation, ce soin offre une relaxation intense et un bien-être durable.",
    price: "À partir de 50.000 FCFA",
    duration: "60 min",
    image: "../img/pierres.png",
    color: "rose",
  },
  {
    name: "Massage du dos",
    description: "Offrez à votre dos une véritable pause avec notre massage relaxant. Idéal pour soulager les tensions musculaires, améliorer la circulation et réduire le stress, ce soin ciblé procure un profond bien-être et une détente immédiate.",
    price: "À partir de 25.000 FCFA",
    duration: "60 min",
    image: "../img/dos.jpg",
    color: "blue",
  },
  {
    name: "Massage crânien",
    description: "Une expérience apaisante qui aide à libérer les tensions accumulées dans le cuir chevelu, le visage et le cou. Ce soin relaxant favorise la circulation sanguine, réduit le stress et procure une sensation de légèreté et de bien-être.",
    price: "55.000 FCFA",
    duration: "75 min",
    image: "../img/crane.jpg",
    color: "emerald",
  },
  {
    name: "Massage tonique au pistolet",
    description: "Utilise des vibrations puissantes pour dénouer les tensions musculaires et stimuler la circulation. Idéal pour les muscles endoloris après l'effort ou pour revitaliser le corps, ce soin énergisant offre une sensation immédiate de légèreté et de bien-être.",
    price: "55.000 FCFA",
    duration: "75 min",
    image: "../img/pieds.jpg",
    color: "emerald",
  },
  {
    name: "Massage des pieds et des mains",
    description: "Procure une détente totale en ciblant des zones réflexes clés. Ce soin relaxant soulage les tensions, stimule la circulation et offre un moment de bien-être profond pour vos pieds et vos mains, souvent mis à l'épreuve au quotidien.",
    price: "35.000 FCFA",
    duration: "75 min", 
    image: "../img/pied.jpg",
    color: "emerald",
  },
  {
    name: "Soins du corps",
    description: "Conçus pour nourrir, détendre et revitaliser votre peau. Profitez d’une expérience de bien-être unique avec nos gommages, enveloppements, épilation, pédicure et manicure, adaptés à vos besoins pour une peau douce, hydratée et un esprit apaisé.",
    price: "75.000 FCFA",
    duration: "75 min", 
    image: "../img/soins.jpg",
    color: "emerald",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Samuel ODUNLAMI",
    text: "L'expérience la plus relaxante que j'ai jamais eue. Lauris est une véritable professionnelle en la matière!",
    role: "Client régulier",
  },
  {
    name: "Michael AGBO",
    text: "Safe Haven est devenu mon lieu de prédilection pour soulager le stress. Je le recommande vivement !",
    role: "Client fidèle",
  },
  {
    name: "Emma AGOSSOU",
    text: "L'attention portée aux détails et le niveau de soins sont exceptionnels. Un véritable sanctuaire.",
    role: "Nouveau client",
  },
];

// Available time slots
const timeSlots = [
  "9:00", "10:00", "11:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setBookingSuccess(true);
      setBookingError(false);
      // Reset form after success
      setTimeout(() => {
        setBookingStep(1);
        setFormData({
          service: "",
          date: "",
          time: "",
          name: "",
          email: "",
          phone: "",
          notes: "",
        });
        setBookingSuccess(false);
      }, 3000);
    } catch (error) {
      setBookingError(true);
      setBookingSuccess(false);
    }
  };

  const nextStep = () => {
    if (bookingStep < 4) setBookingStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (bookingStep > 1) setBookingStep(prev => prev - 1);
  };

  // Get tomorrow's date for min date in date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now for max date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="../img/logoshrc.png" className="h-10 w-10" />
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#services" className="text-gray-600 hover:text-rose-600">Nos Services</a>
              <a href="#promotions" className="text-gray-600 hover:text-rose-600">Promotions</a>
              <a href="#testimonials" className="text-gray-600 hover:text-rose-600">Témoignages</a>
              <a href="#blog" className="text-gray-600 hover:text-rose-600">Blog</a>
              <a href="#book" className="text-gray-600 hover:text-rose-600">Prendre un RDV</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Nos Services</a>
              <a href="#promotions" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Promotions</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Témoignages</a>
              <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Blog</a>
              <a href="#book" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Prendre un RDV</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-cover bg-center h-[600px]" style={{
          backgroundImage: "url('../img/IMG11.png?auto=format&fit=crop&q=80&w=1920')"
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Votre sanctuaire de bien-être</h1>
              <p className="text-xl md:text-2xl mb-8">Faîtes-vous livrer le bien-être à domicile</p>
              <a href="#book" className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors inline-block">
                 Prendre un RDV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{
                transform: `translateX(-${currentServiceIndex * 100}%)`
              }}>
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-400 mr-2" />
                            <span>{service.duration}</span>
                          </div>
                          <span className="text-xl font-bold text-rose-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              ←
            </button>
            <button
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Offres spéciales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Spécial nouveau client</h3>
              <p className="text-gray-600 mb-4">Obtenez 20 % de réduction sur votre première séance de massage</p>
              <a href="https://wa.me/+22996337000?text=Bonjour,+Je+suis+un+nouveau+client+intéressé(e)+par+votre+offre" className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700">
                Je veux réserver
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Abonnement mensuel</h3>
              <p className="text-gray-600 mb-4">Économisez 15 % sur tous les services grâce à notre programme d’adhésion</p>
              <a href="https://wa.me/+22996337000?text=Bonjour,+Je+suis+intéressé(e)+par+l'abonnement+mensuel+et+je+désire+en+savoir+plus" className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Astuces & Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../img/IMG33.png"
                alt="Blog post"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Avantages du massage régulier</h3>
                <p className="text-gray-600">Découvrez comment une massothérapie régulière peut améliorer votre bien-être général...</p>
                <a href="#" className="text-rose-600 hover:text-rose-700 mt-4 inline-block">Lire la suite →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../img/IMG31.png"
                alt="Blog post"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Techniques de soulagement du stress</h3>
                <p className="text-gray-600">Apprenez des techniques efficaces pour gérer le stress dans votre vie quotidienne...</p>
                <a href="#" className="text-rose-600 hover:text-rose-700 mt-4 inline-block">lire la suite  →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../img/IMG4.jpg"
                alt="Blog post"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Conseils pour prendre soin de soi</h3>
                <p className="text-gray-600">Des pratiques d’auto-soins essentielles pour maintenir votre santé physique et mentale...</p>
                <a href="#" className="text-rose-600 hover:text-rose-700 mt-4 inline-block">Lire la suite →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Booking Section */}
     <section id="book" className="py-20 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Réserver une séance</h2>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-rose-100">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-600 transition-all duration-500"
                  style={{ width: `${((bookingStep - 1) / 3) * 100}%` }}
                />
              </div>
              <div className="flex justify-between">
                <div className={`text-xs font-semibold ${bookingStep >= 1 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Choisir un Service
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 2 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Date & l'Heure
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 3 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Vos Coordonées
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 4 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Confirmer
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleBookingSubmit}>
              {/* Step 1: Service Selection */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-6">Choisir un Service</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <label
                        key={index}
                        className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                          formData.service === service.name
                            ? 'border-rose-600 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.name}
                          checked={formData.service === service.name}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="absolute opacity-0"
                        />
                        <span className="font-semibold text-gray-900 mb-1">{service.name}</span>
                        <span className="text-sm text-gray-500 mb-2">{service.duration}</span>
                        <span className="text-rose-600 font-bold">{service.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {bookingStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6">Date & l'Heure</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        min={minDate}
                        max={maxDateStr}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heure
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {timeSlots.map((time, index) => (
                          <label
                            key={index}
                            className={`relative flex items-center justify-center p-2 cursor-pointer rounded-md border transition-all duration-200 ${
                              formData.time === time
                                ? 'border-rose-600 bg-rose-50 text-rose-600'
                                : 'border-gray-200 hover:border-rose-200'
                            }`}
                          >
                            <input
                              type="radio"
                              name="time"
                              value={time}
                              checked={formData.time === time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              className="absolute opacity-0"
                            />
                            {time}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {bookingStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6">Vos Coordonnées</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Demande additionnelle (Optional)
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {bookingStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6">Confirmer </h3>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Service:</span>
                      <span>{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Heure:</span>
                      <span>{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Nom:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Numéro de Téléhone:</span>
                      <span>{formData.phone}</span>
                    </div>
                    {formData.notes && (
                      <div className="pt-3 border-t">
                        <span className="font-medium block mb-2">Demande additionnelle:</span>
                        <span className="text-gray-600">{formData.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Success Message */}
                  {bookingSuccess && (
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-green-700">
                      Réservation réussie ! Nous vous enverrons un e-mail de confirmation dans les plus brefs délais.
                      </span>
                    </div>
                  )}

                  {/* Error Message */}
                  {bookingError && (
                    <div className="flex items-center p-4 bg-red-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                      <span className="text-red-700">
                      Un problème s'est produit. Veuillez réessayer.
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {bookingStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Précédent
                  </button>
                )}
                {bookingStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 disabled:opacity-50"
                    disabled={bookingSuccess}
                  >
                    Confirmer 
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="../img/logoshrc.png" className="h-20 w-20" />
             
              </div>
              <p className="text-gray-400">Votre sanctuaire pour le bien-être et de détente.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" />Godomey, Cotonou (Bénin)</p>
                <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +229 96337000</p>
                <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@safehaven.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires</h3>
              <div className="space-y-2">
                <p>Lundi - Vendredi: 9h - 20h</p>
                <p>Samedi: 10h - 18h</p>
                <p>Dimanche: 10h - 16h</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Abonnez-vous pour recevoir des offres spéciales et des conseils.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Entrer votre email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-rose-600 px-4 py-2 rounded-r-md hover:bg-rose-700">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            
            <p>© 2025 Safe Haven. Tous droit réservé | <a href=""> by SamAgency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;