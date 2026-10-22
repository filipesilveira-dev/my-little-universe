import bg_greetings_img from "../assets/img/movieTheater.jpg";
import bg_movies_img from "../assets/img/cinema.jpg";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* Seção "Greetings" */}
      <section
        style={{ backgroundImage: `url(${bg_greetings_img})` }}
        className="flex items-center w-full h-96 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex justify-center items-center font-medium min-[250px]:w-full min-[450px]:w-1/2">
          <div className="flex flex-col gap-3 w-90 mx-2  p-6 bg-(--bg)/80  rounded-xl  shadow-2xl sm:ml-0">
            <h1 className="text-4xl leading-none">{t.home.greetings.title}</h1>
            <p className="min-[250px]:text-sm leading-normal">
              {t.home.greetings.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* Seção "Movies" */}
      <section
        style={{ backgroundImage: `url(${bg_movies_img})` }}
        className="flex items-center w-full h-96 bg-cover bg-center bg-no-repeat"
      ></section>
    </div>
  );
}
