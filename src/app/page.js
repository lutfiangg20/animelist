import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/top/anime?limit=8"
  );
  const topAnime = await response.json();
  console.log(topAnime);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Paling Baru"
          linkTitle="Ikuti Sekarang"
          linkHref="/new"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
