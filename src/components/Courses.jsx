const data = [
  { title: "Office", img: "/office.png", desc: "Master Office Skills On-the-Go" },
  { title: "Coding", img: "/coding.png", desc: "Dive into Coding Expertise" },
  { title: "Accounting", img: "/accounting.png", desc: "Explore Accounting Mastery" },
  { title: "Video Editing", img: "/video.png", desc: "Craft Montage Magic Anywhere" },
  { title: "Design", img: "/design.png", desc: "Unleash Design Brilliance" },
  { title: "Database", img: "/database.png", desc: "Delve into Database Mastery" },
  { title: "WebDev", img: "/webdev.png", desc: "Discover Web Development Expertise" },
];

export default function Courses() {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {data.map((c, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="card text-center p-3 h-100 shadow-sm border-0">
              <img src={c.img} width="80" className="mx-auto" alt={c.title} />
              <h6 className="fw-bold mt-3">{c.title}</h6>
              <p className="text-muted">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
