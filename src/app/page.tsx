'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { asset } from './asset';
import styles from './home.module.scss';

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div
        className={`h-100 w-100 position-absolute ${styles['bg-conference']}`}
        style={{
          backgroundImage: `linear-gradient(#4b3f74cc, #231254ff), url('./images/home/conference.jpeg');`
        }}></div>
      <Navbar expand='lg' data-bs-theme='dark' style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand href='/'>FreelanceConnect</Navbar.Brand>
          <Navbar.Toggle aria-controls='main-nav' />
          <Navbar.Collapse id='main-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#about'>À propos</Nav.Link>
              <Nav.Link href='#schedule'>Programme</Nav.Link>
              <Nav.Link href='#speakers'>Conférenciers</Nav.Link>
              <Nav.Link href='#tickets'>Billets</Nav.Link>
              <Nav.Link href='#sponsors'>Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className='container flex-grow-1 d-flex align-items-center pb-5' style={{ zIndex: 1 }}>
        <div className='text-white col-xxl-7 col-lg-6'>
          <h1 className='display-4'>
            <small>Prochaine édition à venir en 2024</small>
            La plus grande conférence dédiée aux freelances
          </h1>
          <p className='lead my-5'>
            Esprits libres et créatifs qui prenez en main votre destin professionnel. Rejoignez la journée des freelances,
            l’événement incontournable pour les freelances ambitieux et visionnaires de la région lyonnaise.
          </p>
          <div className='d-sm-block d-grid'>
            <a className='btn btn-primary btn-lg' href='#tickets'>
              Réservez votre billet
            </a>
          </div>
        </div>
      </section>
      <div
        className={`mb-5 ${styles['bg-speaker']} ${styles['sparta']}`}
        style={{ backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)` }}>
        <img className={`img-gray-scale ${styles['home-illustration']}`} src={asset('images/home/speaker.webp')} alt='' />
      </div>
    </div>
    <main className='overflow-hidden'>
      <section id='about' className='py-6'>
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
                <button className='btn btn-outline-primary btn-lg' disabled>
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='schedule' className='bg-light-subtle py-6'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-5 col-12'>
              <h2>
                <small>Programme de la conférence</small>
                Retrouvez la liste des événements prévus
              </h2>
              <p className='lead my-4'>
                Le programme se déroule sur une journée de 08h30 à 18h00, des conférences au format 40 minutes et 20 minutes
                s’enchaîneront tout au long de la journée.
              </p>
              <div className='d-sm-block d-grid'>
                <Link className='btn btn-outline-primary btn-lg' href={'talks'}>
                  Voir le programme
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-12 mt-lg-0 mt-5'>
              <div className='row'>
                <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                  08:30 - 09:00
                </div>
                <div className='col-auto p-0 position-relative '>
                  <div
                    className='position-absolute text-bg-primary rounded-circle start-0 translate-middle-x d-flex'
                    style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                    <small className='fw-bolder align-self-center text-center w-100'>1</small>
                  </div>
                </div>
                <div className='col pb-5 ps-5 border-start border-primary-subtle border-4'>
                  <h3 className='h4'>Accueil</h3>
                  Récupérez votre badge pour la journée, puis prenez le temps du petit-déjeuner pour discuter un café à la main.
                </div>
              </div>
              <div className='row'>
                <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                  09:40 - 12:00
                </div>
                <div className='col-auto p-0 position-relative '>
                  <div
                    className='position-absolute text-bg-primary rounded-circle start-0 translate-middle-x d-flex'
                    style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                    <small className='fw-bolder align-self-center text-center w-100'>2</small>
                  </div>
                </div>
                <div className='col pb-5 ps-5 border-start border-primary-subtle border-4'>
                  <h3 className='h4'>Première partie</h3>
                  Plénière d’ouverture, suivi de 9 de conférences réparties sur 3 pistes.
                </div>
              </div>
              <div className='row'>
                <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                  12:00 - 13:30
                </div>
                <div className='col-auto p-0 position-relative '>
                  <div
                    className='position-absolute text-bg-primary rounded-circle start-0 translate-middle-x d-flex'
                    style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                    <small className='fw-bolder align-self-center text-center w-100'>3</small>
                  </div>
                </div>
                <div className='col pb-5 ps-5 border-start border-primary-subtle border-4'>
                  <h3 className='h4'>Déjeuner</h3>
                  Profitez d’un repas prévu sur place. Tout est inclus dans le prix du billet.
                </div>
              </div>
              <div className='row'>
                <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                  13:30 - 17:40
                </div>
                <div className='col-auto p-0 position-relative '>
                  <div
                    className='position-absolute text-bg-primary rounded-circle start-0 translate-middle-x d-flex'
                    style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                    <small className='fw-bolder align-self-center text-center w-100'>4</small>
                  </div>
                </div>
                <div className='col pb-5 ps-5 border-start border-primary-subtle border-4'>
                  <h3 className='h4'>Seconde partie</h3>
                  12 conférences sont prévues l’après-midi, elles sont également réparties sur 3 pistes.
                </div>
              </div>
              <div className='row'>
                <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                  17:50 - 18:30
                </div>
                <div className='col-auto p-0 position-relative '>
                  <div
                    className='position-absolute text-bg-primary rounded-circle start-0 translate-middle-x d-flex'
                    style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                    <small className='fw-bolder align-self-center text-center w-100'>5</small>
                  </div>
                </div>
                <div className='col ps-5'>
                  <h3 className='h4'>Fermeture</h3>
                  Plénière de fermeture suivi d’un apéro avant de se quitter.
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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
                  aspectRatio: '1/1',
                  backgroundImage: `url('./images/home/wave.svg'), linear-gradient(to bottom right, #fb4a85, #5223ce)`
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

export default Home;
