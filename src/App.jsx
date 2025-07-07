import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode {selectedEpisode.number}: {selectedEpisode.title}
        </h2>
        <p>{selectedEpisode.description}.</p>
      </section>
    );
  }

  function EpisodesList() {
    return (
      <section className="episodes">
        <h2>Episode List</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
