import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import pierres from '../img/pierres.png';
import dos from '../img/dos.jpeg';
import pied from '../img/pied.jpg';
import pistolet from '../img/pistolet.jpg';
import epilo from '../img/epilo.jpg';
import pedi from '../img/pedi.jpg';
import crane from '../img/crane.jpg';
import soins from '../img/soins.jpg';
import gomme from '../img/gomme.jpg';
import IMG11 from '../img/IMG11.png';
import Promotions from './Promotions';
import Testimonials from './Testimonials';
import { BlogArticleProps, blogs } from './blogData';
import emailjs from '@emailjs/browser';

// Types
type MassageService = {
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  color: string;
};

type BookingFormData = {
  service: string[]; // Changed to string array for multiple selections
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  totalPrice: number; // Added totalPrice property
};

// Services data
const services: MassageService[] = [

  {
    name: "Manucure & Pédicure",
    description: " Un soin complet pour vos mains et vos pieds. Profitez d’un moment de détente tout en prenant soin de votre beauté. Nos soins incluent le limage, le polissage, l’hydratation et la pose de vernis, pour des mains et des pieds impeccables.",
    price: 10000,
    duration: "60 min",
    image: pedi,
    color: "Rose",
  },
  {
    name: "Gommage corporel",
    description: "Un soin exfoliant qui élimine les cellules mortes, laissant votre peau douce et éclatante. Ce gommage revitalisant hydrate et nourrit la peau, tout en favorisant la circulation sanguine pour un teint radieux.",
    price: 15000,
    duration: "45 min",
    image: gomme,
    color: "emerald",
  },

  {
    name: "Soins du visage",
    description: "Conçus pour nourrir, détendre et revitaliser votre peau. Une expérience bien-être sur mesure qui inclut nettoyage, gommage, masque et hydratation. Idéal pour un teint éclatant et une peau radieuse.",
    price: 20000,
    duration: "60 min",
    image: soins,
    color: "emerald",
  },
  {
    name: "Epilation",
    description: "Un soin doux et efficace pour éliminer les poils indésirables. Nos techniques d'épilation garantissent une peau lisse et soyeuse, tout en minimisant les irritations. Idéal pour un look impeccable et une sensation de fraîcheur.",
    price: 25000,
    duration: "40 min",
    image: epilo,
    color: "emerald",
  },
  {
    name: "Massage aux pierres chaudes",
    description: "Combine la chaleur apaisante des pierres volcaniques avec des techniques de massage pour détendre en profondeur les muscles et calmer l'esprit. Idéal pour soulager les tensions et favoriser la circulation, ce soin offre une relaxation intense et un bien-être durable.",
    price: 30000,
    duration: "70 min",
    image: pierres,
    color: "rose",
  },
  {
    name: "Massage ciblé (dos, tête, pieds ou mains)",
    description: "Un soin personnalisé qui cible les zones de tension spécifiques pour un soulagement rapide et efficace. Que ce soit le dos, la tête, les pieds ou les mains, ce massage vous aide à vous détendre et à retrouver votre énergie.",
    price: 10000,
    duration: "30 min",
    image: dos,
    color: "blue",
  },
  {
    name: "Massage crânien",
    description: "Une expérience apaisante qui aide à libérer les tensions accumulées dans le cuir chevelu, le visage et le cou. Ce soin relaxant favorise la circulation sanguine, réduit le stress et procure une sensation de légèreté et de bien-être.",
    price: 15000,
    duration: "60 min",
    image: crane,
    color: "emerald",
  },
  {
    name: "Massage tonique au pistolet",
    description: "Utilise des vibrations puissantes pour dénouer les tensions musculaires et stimuler la circulation. Idéal pour les muscles endoloris après l'effort ou pour revitaliser le corps, ce soin énergisant offre une sensation immédiate de légèreté et de bien-être.",
    price: 20000,
    duration: "60 min",
    image: pistolet,
    color: "emerald",
  },
  {
    name: "Massage des pieds ou des mains",
    description: "Procure une détente totale en ciblant des zones réflexes clés. Ce soin relaxant soulage les tensions, stimule la circulation et offre un moment de bien-être profond pour vos pieds et vos mains, souvent mis à l'épreuve au quotidien.",
    price: 15000,
    duration: "75 min",
    image: pied,
    color: "emerald",
  },

];

// Available time slots
const timeSlots = [
  "9:00", "10:00", "11:00", "13:00",
  "14:00", "15:00", "16:00", "17:00"
];

function Home() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    service: [], // Initialize as an empty array
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    totalPrice: 0,
  });
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  // const mobileMenuRef = useRef<HTMLDivElement>(null);

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const sendEmail = async (totalPrice: number) => {
    const templateParams = {
      service: formData.service.join(', '),
      date: formData.date,
      time: formData.time,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      notes: formData.notes || 'Aucune',
      total: `${totalPrice.toFixed(2)} Fcfa`,
    };

    return emailjs.send(
      'service_sgajwla',        // Remplace avec ton service ID
      'template_vk85gxi',       // Remplace avec ton template ID
      templateParams,
      'vmpUD0gddbO_OLT9C'         // Remplace avec ta public key
    );
  };


  //const handleBookingSubmit = async (e: React.FormEvent) => {
  const handleBookingSubmit = async () => {
    //e.preventDefault();
    setHasSubmitted(true);
    // Calcul du prix total
    const selectedServices = services.filter(service =>
      formData.service.includes(service.name)
    );

    const totalPrice = selectedServices.reduce((acc, service) => {
      const price = service.price;
      return acc + (isNaN(price) ? 0 : price);
    }, 0);

    // try {
    //   await sendEmail(totalPrice); // Envoie l'email avec prix total
    //   // Simulate API call
    //   await new Promise(resolve => setTimeout(resolve, 1500));
    //   setBookingSuccess(true);
    //   setBookingError(false);
    //   // Reset form after success
    //   setTimeout(() => {
    //     setBookingStep(1);
    //     setFormData({
    //       service: [],
    //       date: "",
    //       time: "",
    //       name: "",
    //       email: "",
    //       phone: "",
    //       notes: "",
    //       totalPrice: 0,
    //     });
    //     setFieldErrors({});
    //     setBookingSuccess(false);
    //     setBookingError(false);
    //     setHasSubmitted(false);
    //   }, 5000);
    // } catch (error) {
    //   setBookingError(true);
    //   setBookingSuccess(false);
    //   console.error('Erreur lors de l’envoi du mail :', error);
    // }


    console.log('Form data saperlipopette:', formData);

    await sendEmail(totalPrice)
    .then(() => {
      setBookingSuccess(true);
      setBookingError(false);

      setTimeout(() => {
        setBookingStep(1);
        setFormData({
          service: [],
          date: "",
          time: "",
          name: "",
          email: "",
          phone: "",
          notes: "",
          totalPrice: 0,
        });
        setFieldErrors({});
        setBookingSuccess(false);
        setBookingError(false);
        setHasSubmitted(false);
      },  3000);
    })
    .catch((error) => {
      setBookingError(true);
      setBookingSuccess(false);
      console.error('Erreur lors de l’envoi du mail :', error);
    });

  };

  const validateStep = (step: number): boolean => {
    let isValid = true;
    const errors: { [key: string]: string } = {};

    if (step === 1 && formData.service.length === 0) {
      isValid = false;
      errors.service = "Veuillez choisir au moins un service.";
    }

    if (step === 2) {
      if (!formData.date) {
        isValid = false;
        errors.date = "Veuillez choisir une date.";
      }
      if (!formData.time) {
        isValid = false;
        errors.time = "Veuillez choisir une heure.";
      }
    }

    if (step === 3) {
      if (!formData.name) {
        isValid = false;
        errors.name = "Veuillez entrer votre nom complet.";
      }
      if (!formData.email) {
        isValid = false;
        errors.email = "Veuillez entrer votre adresse e-mail.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        isValid = false;
        errors.email = "Veuillez entrer une adresse e-mail valide.";
      }
      if (!formData.phone) {
        isValid = false;
        errors.phone = "Veuillez entrer votre numéro de téléphone.";
      }
    }

    setFieldErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (bookingStep < 4 && validateStep(bookingStep)) {
      setBookingStep(prev => prev + 1);
    } else if (bookingStep < 4 && !validateStep(bookingStep)) {
      alert("Veuillez remplir tous les champs requis.");
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) setBookingStep(prev => prev - 1);
    setFieldErrors({}); // Clear errors when going back
  };

  const handleServiceChange = (serviceName: string) => {
    const updatedServices = formData.service.includes(serviceName)
      ? formData.service.filter((name) => name !== serviceName)
      : [...formData.service, serviceName];

    const selectedServices = services.filter(service => updatedServices.includes(service.name));
    const totalPrice = selectedServices.reduce((sum, service) => {
      const priceNumber = service.price; // Directly use the number value
      return sum + priceNumber;
    }, 0);

    setFormData({ ...formData, service: updatedServices, totalPrice });
  };



  // Get tomorrow's date for min date in date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now for max date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];


  const navigate = useNavigate();
  const viewdetails = (item: BlogArticleProps) => {
    navigate(`/blog/${item.index}`);
  }

  return (
    <div >
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-cover bg-center h-[600px]" style={{
          backgroundImage: `url(${IMG11})`,
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
                          <span className="text-xl font-bold text-rose-600">{service.price} Fcfa</span>
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
      <Promotions />
      {/* Testimonials Section*/}
      <Testimonials />

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Astuces & Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {
              blogs.map((item , index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt="Blog post"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2"> {item.title} </h3>
                    <p className="text-gray-600 overflow-hidden text-ellipsis truncate"> {item.content} </p>
                    <button onClick={(e) => { e.preventDefault(); viewdetails(item) }} className="text-rose-600 hover:text-rose-700 mt-4 inline-block">Lire la suite →</button>
                  </div>
                </div>
              ))
            }
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
                  Etape 1
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 2 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Etape 2
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 3 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Etape 3
                </div>
                <div className={`text-xs font-semibold ${bookingStep >= 4 ? 'text-rose-600' : 'text-gray-400'}`}>
                  Etape 4
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={(e)=> {e.preventDefault();}} /*onSubmit={handleBookingSubmit}*/>
              {/* Step 1: Service Selection */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-6">Choisir un ou plusieurs Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <label
                        key={index}
                        className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 ${formData.service.includes(service.name)
                          ? 'border-rose-600 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-200'
                          }`}
                      >
                        <input
                          type="checkbox" // Changed to checkbox
                          name="service"
                          value={service.name}
                          checked={formData.service.includes(service.name)}
                          onChange={() => handleServiceChange(service.name)} // Use handleServiceChange
                          className="absolute opacity-0"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-gray-900 mb-1 block">{service.name}</span>
                            <span className="text-sm text-gray-500 mb-2 block">{service.duration}</span>
                            <span className="text-rose-600 font-bold block">{service.price} Fcfa</span>
                          </div>
                          <div className="ml-2">
                            <input
                              type="checkbox"
                              checked={formData.service.includes(service.name)}
                              onChange={() => handleServiceChange(service.name)}
                              className="form-checkbox h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                            />
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {fieldErrors.service && <p className="text-red-500 text-sm">{fieldErrors.service}</p>}
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
                      {fieldErrors.date && <p className="text-red-500 text-sm">{fieldErrors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heure
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {timeSlots.map((time, index) => (
                          <label
                            key={index}
                            className={`relative flex items-center justify-center p-2 cursor-pointer rounded-md border transition-all duration-200 ${formData.time === time
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
                      {fieldErrors.time && <p className="text-red-500 text-sm">{fieldErrors.time}</p>}
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
                      {fieldErrors.name && <p className="text-red-500 text-sm">{fieldErrors.name}</p>}
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
                      {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.email}</p>}
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
                      {fieldErrors.phone && <p className="text-red-500 text-sm">{fieldErrors.phone}</p>}
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
                    <div>
                      <span className="font-medium block mb-1">Services:</span>
                      <span>{formData.service.join(', ')}</span>
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
                      <span className="font-medium">Numéro de Téléphone:</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex justify-between text-rose-600 font-bold">
                      <span className="font-medium">Prix Total:</span>
                      <span>{formData.totalPrice} Fcfa</span>
                    </div>
                    {formData.notes && (
                      <div className="pt-3 border-t">
                        <span className="font-medium block mb-2">Demande additionnelle:</span>
                        <span className="text-gray-600">{formData.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Success Message */}
                  {hasSubmitted && bookingSuccess && (
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-green-700">
                        Réservation réussie ! Nous vous enverrons un e-mail de confirmation dans les plus brefs délais.
                      </span>
                    </div>
                  )}

                  {/* Error Message */}
                  {hasSubmitted && bookingError && (
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
                    //type="submit"
                    className="ml-auto px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 disabled:opacity-50"
                    disabled={bookingSuccess}
                    onClick={()=> {handleBookingSubmit()}}
                  >
                    Confirmer
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;