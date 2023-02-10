import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { searchFlights } from './api/travel';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const search = async () => {
      const data = await searchFlights('SFO', 'NYC', '2023-03-01');
      setFlights(data.results);
    };
    search();
  }, []);
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            {flights.map(flight => (
              <div key={flight.id}>
                {flight.itineraries[0].outbound.flights[0].departs_at}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
