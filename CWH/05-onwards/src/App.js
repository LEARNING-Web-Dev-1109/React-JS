import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="iTextUtils" aboutText="iAboutUs" /> */}
      {/* <Navbar title={45} aboutText="iAboutUs" /> */}
      <Navbar />
      <TextForm heading='Enter the Text' />
    </>
    
  );
}

export default App;
