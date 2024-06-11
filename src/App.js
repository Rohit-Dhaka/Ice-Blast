import './App.css';
import Behind from './components/Behind';
import Blast from './components/Blast';
import Blasting from './components/Blasting';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Future from './components/Future';

import Hero from './components/Hero';
import Meet from './components/Meet';
import News from './components/News';
import Number from './components/Number';
import Understanding from './components/Understanding';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Hero />
      <Future />
      <Understanding/>
      <Blasting/>
      <Behind/>
      <Number/>
      <Work/>
      <Meet/>
      <Faq/>
      <Blast />
      <News />
      <Footer/>
    </div>
  );
}

export default App;

