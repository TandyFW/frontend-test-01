import React from 'react';
import Chart from '../components/Chart';
import ChartMenu from '../components/ChartMenu';
import Header from '../components/Header';

function Home() {
  return (
    <main className="App">
        <Header />
        <section>
          <ChartMenu />
          <Chart />
        </section>
      </main>
  );
}

export default Home;
