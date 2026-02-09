import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Real Photo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/Panorama-VLUN-24.jpg" 
            alt="Turm 20 Panorama"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="theatre-gold">Turm 20</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Theater & Kulturverein Linz
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Genießen Sie mit uns das Theater & die Sommerkonzerte im malerischen Ambiente des Turm 20 in Linz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/events/" className="btn-primary inline-block text-center">
              Aktuelle Veranstaltungen
            </a>
            <a href="/contact/" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all inline-block text-center">
              Kontaktieren Sie Uns
            </a>
          </div>
        </div>
      </section>

      {/* Current Events Section with Real Photos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 theatre-gold">
            Aktuelle Veranstaltungen
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Romeo & Julia Card */}
            <div className="card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="h-48 relative">
                <Image 
                  src="/images/DSC_0823-Soldaten-Einmarsch-scaled.jpg" 
                  alt="Romeo & Julia Aufführung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Romeo & Julia</h3>
                <p className="text-gray-400 mb-4">Sommertheater 2026</p>
                <p className="text-gray-300 mb-6">
                  Shakespeares klassische Liebesgeschichte in moderner Inszenierung unter freiem Himmel mit unserem fantastischen, international besetzten Ensemble!
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p>📅 15. Juli - 15. August 2026</p>
                  <p>🕗 20:00 Uhr</p>
                  <p>📍 Turm 20, Linz</p>
                </div>
                <a href="/events/romeo-julia/" className="btn-primary inline-block w-full text-center">
                  Mehr Informationen
                </a>
              </div>
            </div>

            {/* Sommerkonzerte Card */}
            <div className="card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="h-48 relative">
                <Image 
                  src="/images/DSC_0811-Phil-Musik-scaled.jpg" 
                  alt="Sommerkonzerte"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Sommerkonzerte</h3>
                <p className="text-gray-400 mb-4">Musik im Sommer</p>
                <p className="text-gray-300 mb-6">
                  Genießen Sie sommerliche Klänge von lokalen und internationalen Künstlern in unserem einzigartigen Ambiente.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p>📅 Jeden Samstag im Juli</p>
                  <p>🕗 19:00 Uhr</p>
                  <p>📍 Turm 20, Linz</p>
                </div>
                <Link href="/events/concerts" className="btn-primary inline-block w-full text-center">
                  Konzertprogramm
                </Link>
              </div>
            </div>

            {/* Lesereihe Card */}
            <div className="card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="h-48 relative">
                <Image 
                  src="/images/Ensemble-Florian-mitte.jpg" 
                  alt="Lesereihe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Lesereihe</h3>
                <p className="text-gray-400 mb-4">Literarische Abende</p>
                <p className="text-gray-300 mb-6">
                  Entdecken Sie neue Stimmen und klassische Werke in unserer intimen Lesereihe mit renommierten Autoren.
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p>📅 Erster Freitag im Monat</p>
                  <p>🕗 19:30 Uhr</p>
                  <p>📍 Turm 20, Linz</p>
                </div>
                <Link href="/events/readings" className="btn-primary inline-block w-full text-center">
                  Termine & Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 theatre-gold">
            Impressionen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_0863-Beatrice-scaled.jpg" alt="Beatrice" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_0874-Claudio-scaled.jpg" alt="Claudio" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_0888-Don-Pedro-scaled.jpg" alt="Don Pedro" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_0858-Aufgang-Bühne-Ensemble-scaled.jpg" alt="Ensemble" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_5125-Bühne-seitlich-scaled.jpg" alt="Bühne seitlich" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_5134-Bühne-frontal-Nacht-scaled.jpg" alt="Bühne frontal" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/DSC_1345-Abschlussapplaus-scaled.jpg" alt="Applaus" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/Turm-20-Himmel.jpg" alt="Turm 20 bei Nacht" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 theatre-gold">
            Über Turm 20
          </h2>
          <div className="mb-8">
            <Image 
              src="/images/Bühne-Premiere-VLuN.jpg" 
              alt="Turm 20 Premiere"
              width={800}
              height={400}
              className="rounded-lg mx-auto mb-8"
            />
          </div>
          <p className="text-lg text-gray-300 mb-8">
            Das Turm 20 ist mehr als nur ein Theater – es ist ein kultureller Treffpunkt im Herzen von Linz. 
            Seit 2019 bieten wir ein Programm aus Theater, Musik und Literatur, das Besucher aus ganz Oberösterreich anzieht.
          </p>
          <a href="/about/" className="btn-primary inline-block">
            Mehr Über Uns Erfahren
          </a>
        </div>
      </section>
    </Layout>
  )
}
