import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Badge } from 'react-bootstrap';
import { asset } from '@/app/_utils';
import { Translate } from '@/app/_translation';
import { Header, About, Hero } from './_components';
import { Program } from './_components/Program';
import styles from './home.module.scss';
import * as slots from '@/data/slots.json';

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className={`h-100 w-100 position-absolute ${styles['bg-conference']}`}></div>
      <Header />
      <section className='container flex-grow-1 d-flex align-items-center pb-5' style={{ zIndex: 1 }}>
        <Hero></Hero>
      </section>
      <div className={`mb-5 ${styles['bg-speaker']} ${styles['sparta']}`}>
        <img className={`img-gray-scale ${styles['home-illustration']}`} src={asset('images/home/speaker.webp')} alt='' />
      </div>
    </div>
    <main className='overflow-hidden'>
      <section id='about' className='py-6'>
        <About></About>
      </section>
      <section id='program' className='bg-light-subtle py-6'>
        <Program serializedSlots={JSON.stringify(slots)}></Program>
      </section>
      <section id='speakers' className='text-bg-secondary py-6'>
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
          <div className='row py-5 g-xl-5 text-center'>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-1.webp')}
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
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-2.webp')}
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
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-3.webp')}
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
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-4.webp')}
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Pierre Beaulne</h3>
              <p>Responsable juridique et Référent déontologue</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-5.webp')}
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Amélie Desjardins</h3>
              <p>Key Account Manager</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-6.webp')}
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Sandra Béliveau</h3>
              <p>Digital Ecosystem Builder</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-7.webp')}
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Corinne Feng</h3>
              <p>Product manager @Benka</p>
            </div>
            <div className='col-md-3 col-6'>
              <div
                className={`rounded-circle m-auto overflow-hidden position-relative ${styles['bg-speaker']}`}
                style={{
                  width: '80%',
                  aspectRatio: '1/1'
                }}>
                <Image
                  src={asset('images/speakers/speaker-8.webp')}
                  alt=''
                  width={200}
                  height={200}
                  className='img-gray-scale position-absolute translate-middle-x bottom-0 w-100 h-100'></Image>
              </div>
              <h3 className='h5 mt-5'>Yannis Benett</h3>
              <p>Consultant en cybersécurité</p>
            </div>
          </div>
          <div className='d-sm-block d-grid py-5 text-center'>
            <Link className='btn btn-outline-light btn-lg' href={'speakers'}>
              Voir tous les orateurs
            </Link>
          </div>
        </div>
      </section>
      <section id='tickets' className='bg-light py-6'>
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
          <div className='row mt-0 gx-xl-6 gy-4'>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='bg-white rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-light rounded-5 p-4'>
                    <Badge pill bg='primary-subtle' className='mb-3 text-primary'>
                      Early bird
                    </Badge>
                    <br />
                    <b className='display-3 fw-bolder'>29.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    L’offre <b>Early bird</b> donne l’accès à un tarif préférentiel, le nombre de billets à ce tarif est limité
                    à <b>60 places</b>, les premiers arrivés sont les premiers servis !
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary' disabled>
                      Choisir ce billet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='bg-info-subtle text-white rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-info rounded-5 p-4'>
                    <Badge pill bg='warning' className='mb-3'>
                      Normal
                    </Badge>
                    <br />
                    <b className='display-3 fw-bolder'>34.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    L’offre <b>Normal</b> donne l’accès à la conférence, il n’y a pas de limite de places pour ce tarif.
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary' disabled>
                      Choisir ce billet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className='bg-white rounded-5'>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div className='text-center bg-light rounded-5 p-4'>
                    <Badge pill bg='info-subtle' className='mb-3'>
                      Soutien
                    </Badge>
                    <br />
                    <b className='display-3 fw-bolder'>49.99€</b>
                  </div>
                </div>
                <div className='p-4'>
                  <p>
                    En choisissant l’offre de <b>soutien</b>, vous participez au côté de nos sponsors à rendre cet événement
                    possible en contribuant à assurer l’équilibre économique et nous vous <b>en remercions chaleureusement !</b>
                  </p>
                  <div className='text-center my-4'>
                    <button className='btn btn-primary' disabled>
                      Choisir ce billet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sponsors' className='bg-light pb-6'>
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
    </main>
  </>
);

export default Translate(Home, 'home');
