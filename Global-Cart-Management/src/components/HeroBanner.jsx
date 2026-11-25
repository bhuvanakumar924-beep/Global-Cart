import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBanner({ onShop }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">
          <Sparkles size={15} /> THE BIG EVERYDAY SALE
        </span>

        <h1>
          Find your next
          <br />
          <em>favourite thing.</em>
        </h1>

        <p>
          Discover smart picks for your technology,
          fashion and home.
        </p>

        <button className="primary-button" onClick={onShop}>
          Explore Products <ArrowRight size={18} />
        </button>
      </div>

      <div className="hero-art">
        <div className="hero-emoji">🛍️</div>
        <div className="hero-tag">
          GOOD FINDS
          <br />
          <b>START HERE</b>
        </div>
      </div>
    </section>
  );
}