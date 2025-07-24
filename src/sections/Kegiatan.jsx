import React, { useEffect, useState } from 'react';
import '../styles/kegiatan.css';
import kegiatanData from '../data/kegiatan.json'; // Ganti path sesuai file kamu

function Kegiatan() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Karena kita import langsung dari JSON, ini hanya untuk kompatibilitas atau efek lainnya.
    setData(kegiatanData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section id='kegiatan'>
      <div className="project-riset">
        <p>{data.intro}</p>

        <h2>{data.keyActivitiesTitle}</h2>
        <ul>
          {data.keyActivities.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>

        <p>{data.outcomeIntro}</p>
        <ul>
          {data.outcomes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>{data.collaboration}</p>
      </div>
    </section>
  );
}

export default Kegiatan;
