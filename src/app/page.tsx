import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './home.module.scss';

const Home = (): ReactElement => (
  <>
    <div className={`vh-100 overflow-hidden position-relative ${styles['cover']}`}>
      <div className={`h-100 w-100 position-absolute ${styles['bg-conference']}`}></div>
      <div className={`position-absolute end-0 text-center ${styles['bg-speaker']}`}>
        <img
          src='/images/home/speaker.webp'
          className='position-absolute bottom-0 start-50 translate-middle-x img-gray-scale'
          height='90%'
          alt=''
        />
      </div>
      <div className='d-flex flex-column h-100'>
        <nav className='navbar navbar-expand-lg' data-bs-theme='dark'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mb-2 mb-lg-0 ms-auto'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Link
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled' aria-disabled='true'>
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className='container position-relative flex-grow-1 d-flex align-items-center'>
          <div className='text-white col-xl-6 col-lg-8'>
            <h1 className='display-4'>
              <small>Prochaine édition à venir en 2024</small>
              La plus grande conférence dédiée aux freelances
            </h1>
            <p className='lead my-5'>
              Esprits libres et créatifs qui prenez en main votre destin professionnel. Rejoignez la journée des freelances,
              l’événement incontournable pour les freelances ambitieux et visionnaires de la région lyonnaise.
            </p>
            <div className='d-sm-block d-grid'>
              <button className='btn btn-primary btn-lg'>Réservez votre billet</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <main>
      <section className='py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'></div>
            <div className='col-lg-6 col-12'>
              <h2>
                <small>À propos de la conférence</small>
                Bienvenue à la plus grande conférence dédiée aux freelances
              </h2>
              <p className='lead my-4'>
                Esprits libres et créatifs qui prenez en main votre destin professionnel. Rejoignez la journée des freelances,
                l’événement incontournable pour les freelances ambitieux et visionnaires de la région lyonnaise.
              </p>
              <div className='d-sm-block d-grid'>
                <button className='btn btn-outline-primary btn-lg'>En savoir plus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-light py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <h2>
                <small>Programme de la conférence</small>
                Retrouvez la liste des événements prévus
              </h2>
              <p className='lead my-4'>
                Le programme se déroule sur une journée de 08h30 à 18h00, des conférences au format 40 minutes et 20 minutes
                s’enchaîneront tout au long de la journée.
              </p>
              <div className='d-sm-block d-grid'>
                <button className='btn btn-outline-primary btn-lg'>Téléchargez le programme</button>
              </div>
            </div>
            <div className='col-md-6 col-12'></div>
          </div>
        </div>
      </section>
      <section className='text-bg-secondary py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center'>
              <h2>
                <small>Les orateurs de la conférence</small>
                Les conférenciers
              </h2>
              <p className='lead my-4'>
                Des experts renommés dans leurs domaines partageront leurs connaissances pour vous aider à vous épanouir en tant
                que freelance
              </p>
            </div>
          </div>
          <div className='row py-5 g-xxl-6 g-xl-5 text-center'>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-1.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <div className='btn-group mt-n4'>
                <a href='#' className='btn btn-light p-2 ps-3'>
                  <i className='text-secondary opacity-50 ri-facebook-fill'></i>
                </a>
                <a href='#' className='btn btn-light p-2'>
                  <i className='text-secondary opacity-50 ri-instagram-fill'></i>
                </a>
                <a href='#' className='btn btn-light p-2'>
                  <i className='text-secondary opacity-50 ri-twitter-x-line'></i>
                </a>
                <a href='#' className='btn btn-light p-2 pe-3'>
                  <i className='text-secondary opacity-50 ri-linkedin-fill'></i>
                </a>
              </div>
              <h3 className='h5 mt-4'>Élodie Thibault</h3>
              <p>Responsable des Relations Humaines chez YouFair</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-2.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <div className='btn-group mt-n4'>
                <a href='#' className='btn btn-light p-2 ps-3'>
                  <i className='text-secondary opacity-50 ri-facebook-fill'></i>
                </a>
                <a href='#' className='btn btn-light p-2'>
                  <i className='text-secondary opacity-50 ri-instagram-fill'></i>
                </a>
                <a href='#' className='btn btn-light p-2'>
                  <i className='text-secondary opacity-50 ri-twitter-x-line'></i>
                </a>
                <a href='#' className='btn btn-light p-2 pe-3'>
                  <i className='text-secondary opacity-50 ri-linkedin-fill'></i>
                </a>
              </div>
              <h3 className='h5 mt-4'>Jean Couvreur</h3>
              <p>Contrôleur de gestion</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-3.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Michel Mignard</h3>
              <p>Chargée de communication indépendant</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-4.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Pierre Beaulne</h3>
              <p>Responsable juridique et Référent déontologue</p>
            </div>{' '}
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-5.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Amélie Desjardins</h3>
              <p>Key Account Manager</p>
            </div>{' '}
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-6.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Sandra Béliveau</h3>
              <p>Digital Ecosystem Builder</p>
            </div>{' '}
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-7.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Corinne Feng</h3>
              <p>Product manager @Benka</p>
            </div>{' '}
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{ width: '100%', 'aspect-ratio': '1/1' }}>
                <Image
                  src='/images/speakers/speaker-8.webp'
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Yannis Benett</h3>
              <p>Consultant en cybersécurité</p>
            </div>
          </div>
          <div className='text-center py-5'>
            <Link className='btn btn-outline-light btn-lg' href={'speakers'}>
              Voir tous les orateurs
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-light py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <h2>
                <small>Réservez votre place</small>
                Choisissez le billet qui vous convient parmi nos offres
              </h2>
              <p className='lead my-4'>
                Nous vous proposons trois offres affin que vous puissiez choisir ce qui correspond le mieux à vos moyens.
              </p>
            </div>
          </div>
          <div className='row mt-0 gx-5 gy-4'>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='bg-white rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-light rounded-5 p-4'>
                    <p>Early bird</p>
                    <b className='display-3 fw-bolder'>29.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    L’offre <b>Early bird</b> donne l’accès à un tarif préférentiel, le nombre de billets à ce tarif est limité
                    à <b>60 places</b>, les premiers arrivés sont les premiers servis !
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary'> Choisir ce billet</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='text-bg-info rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-dark opacity-25 rounded-5 p-4'>
                    <p>Normal</p>
                    <b className='display-3 fw-bolder'>34.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    L’offre <b>Normal</b> donne l’accès à la conférence, il n’y a pas de limite de places pour ce tarif.
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary'> Choisir ce billet</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='bg-white rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-light rounded-5 p-4'>
                    <p>Soutien</p>
                    <b className='display-3 fw-bolder'>49.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    En choisissant l’offre de <b>soutien</b>, vous participez au côté de nos sponsors à rendre cet événement
                    possible en contribuant à assurer l’équilibre économique et nous vous <b>en remercions chaleureusement !</b>
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary'> Choisir ce billet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-light pb-6'>
        <div className='container'>
          <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center'>
            <h2>
              <small>Sponsors de la conférence</small>
              Merci à nos sponsors pour leur soutien
            </h2>
            <p className='lead my-4'>
              Sans le soutien de nos sponsors nous n’aurions pas pu vous proposer une conférence d’une telle qualité, nous
              tenons ici à les remercier tout particulièrement pour leur aide.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-dark py-6 text-white'>
        <div className='container'>
          <h2>La journée des freelances</h2>
          <ul>
            <li>
              <Link href={'talks'}>Talks</Link>
            </li>
            <li>
              <Link href={'speakers'}>Speakers</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </>
);

export default Home;
