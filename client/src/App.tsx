import Masthead from "./sections/Masthead";
import Hero from "./sections/Hero";
import Press from "./sections/Press";
import Thesis from "./sections/Thesis";
import Method from "./sections/Method";
import Dispatch from "./sections/Dispatch";
import Dossier from "./sections/Dossier";
import Connect from "./sections/Connect";

export default function App() {
  return (
    <div className="frame" id="top">
      <span className="crop crop--tl" aria-hidden="true" />
      <span className="crop crop--tr" aria-hidden="true" />
      <span className="crop crop--bl" aria-hidden="true" />
      <span className="crop crop--br" aria-hidden="true" />

      <div className="sheet">
        <Masthead />
        <main>
          <Hero />
          <Press />
          <Thesis />
          <Method />
          <Dispatch />
          <Dossier />
          <Connect />
        </main>
        <footer className="band colophon">Clarity before consensus.</footer>
      </div>

      <div className="grain" aria-hidden="true" />
    </div>
  );
}
