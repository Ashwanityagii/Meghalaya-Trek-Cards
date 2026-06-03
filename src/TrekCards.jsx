import "./TrekCards.css";

// ── Card Data ──
// Each card has: name, location, description, difficulty, duration, and a photo from Unsplash
const treks = [
  {
    id: 1,
    name: "Double Decker Root Bridge",
    location: "Cherrapunji, Meghalaya",
    description: "A living bridge made from roots of rubber trees by the Khasi tribe. A magical hidden gem deep in the forest.",
    difficulty: "Moderate",
    duration: "2 Days",
    photo: "https://images.unsplash.com/photo-1742494267580-e026d3737f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG91YmxlJTIwZGFja2VyJTIwcm9vdCUyMGJyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Dawki River Trek",
    location: "Dawki, Meghalaya",
    description: "Trek along the crystal clear Umngot River where boats appear to float in air. One of India's most surreal hidden spots.",
    difficulty: "Easy",
    duration: "1 Day",
    photo: "https://images.unsplash.com/photo-1733814440199-09cc76ac205d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGF3a2klMjBSaXZlciUyMFRyZWt8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Mawryngkhang Bamboo Trek",
    location: "Wahkhen Village, Meghalaya",
    description: "Walk along narrow bamboo pathways and stone trails above a river gorge. A thrilling hidden adventure very few tourists know about.",
    difficulty: "Hard",
    duration: "1 Day",
    photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    id: 4,
    name: "Laitlum Canyons",
    location: "Shillong, Meghalaya",
    description: "Vast green canyons covered in mist. Often called the 'End of Hills', this is a serene and lesser-known escape near Shillong.",
    difficulty: "Easy",
    duration: "Half Day",
    photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    id: 5,
    name: "Nongriat Village Trail",
    location: "East Khasi Hills, Meghalaya",
    description: "A steep 3500-step descent to a remote village with natural swimming pools and living bridges hidden in the jungle.",
    difficulty: "Hard",
    duration: "3 Days",
    photo: "https://media.istockphoto.com/id/2211399197/photo/a-dirt-road-leads-up-the-hill-with-trees-on-the-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=stJOfrYqntwCZOEbeW8iAAokLo1gzEHylbrPmkpgW_4=",
  },
  {
    id: 6,
    name: "Mawphlang Sacred Forest",
    location: "Mawphlang, Meghalaya",
    description: "An ancient sacred grove protected by the Khasi tribe for 700+ years. No leaf or stone can be removed — nature in its purest form.",
    difficulty: "Easy",
    duration: "Half Day",
    photo: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
  },
];

// ── Color for difficulty badge ──
function getDifficultyColor(level) {
  if (level === "Easy") return "badge--green";
  if (level === "Moderate") return "badge--orange";
  if (level === "Hard") return "badge--red";
  return "";
}

// ── Single Card Component ──
function TrekCard({ trek }) {
  return (
    <div className="card">
      {/* Photo */}
      <div className="card-image-wrapper">
        <img src={trek.photo} alt={trek.name} className="card-image" />
        {/* Difficulty badge on top of image */}
        <span className={`badge ${getDifficultyColor(trek.difficulty)}`}>
          {trek.difficulty}
        </span>
      </div>

      {/* Text Content */}
      <div className="card-content">
        <p className="card-location">📍 {trek.location}</p>
        <h2 className="card-name">{trek.name}</h2>
        <p className="card-description">{trek.description}</p>

        {/* Footer: duration + button */}
        <div className="card-footer">
          <span className="card-duration">⏱ {trek.duration}</span>
          <button className="card-button">Explore Trek</button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page Component ──
export default function TrekCards() {
  return (
    <div className="page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Hidden Meghalaya</h1>
        <p className="page-subtitle">
          Discover secret treks & unexplored destinations in the land of clouds
        </p>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {treks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))}
      </div>
    </div>
  );
}
