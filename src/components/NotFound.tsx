function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-neutral-50 px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-rose-600">Erreur 404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Page non trouvée
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Désolé, la page que vous recherchez n'existe pas. Vous trouverez beaucoup de choses à explorer sur la page d'accueil.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          Retour à l'accueil
        </a>
        <a
          href="https://www.instagram.com/safehaven_great"
          className="text-sm font-semibold text-rose-600 hover:text-rose-800"
        >
          Contactez-nous <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </main>
  
  );
}

export default NotFound;

