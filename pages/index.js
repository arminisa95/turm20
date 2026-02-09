import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Turm 20 - Theater & Kulturverein Linz</title>
        <meta name="description" content="Das Sommertheater im Turm 20 - am Fuße des Pöstlingbergs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>Turm 20</h1>
          <p>Theater & Kulturverein Linz</p>
        </header>

        <section>
          <h2>Willkommen im Sommertheater</h2>
          <p>Genießen Sie mit uns das Theater & die Sommerkonzerte im malerischen Ambiente des Turm 20 in Linz.</p>
        </section>

        <section>
          <h2>Aktuelle Veranstaltungen</h2>
          <div>
            <h3>Romeo & Julia</h3>
            <p>Sommertheater 2026</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Turm 20 Theater & Kulturverein</p>
      </footer>
    </div>
  )
}
