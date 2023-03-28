import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
   
    <div>
      <Head>
        <title>Drone Shot Booking Management - Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="drone1.jpg"
          alt = "first slide label"
        />
        <Carousel.Caption>
         
          <p>Take your Memories to the sky!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="drone2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Take your Memories to the sky!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="drone3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
          Take your Memories to the sky!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
          
      </main>

     
    </div>

  )
}
