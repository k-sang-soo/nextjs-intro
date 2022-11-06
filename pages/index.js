import Seo from '../components/Seo';
import Link from 'next/link';

export default function Home({ results }) {
    // const [movies, setMovies] = useState();
    // useEffect(() => {
    //     (async () => {
    //         // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    //         // const json = await response.json();
    //         // 문법 줄이기
    //         const { results } = await (await fetch(`/api/movies`)).json();
    //         setMovies(results);
    //     })();
    // }, []);
    return (
        <div className="container">
            <Seo title="Home" />
            {results?.map((movie) => (
                <Link href={`/movies/${movie.id}`} key={movie.id}>
                    <a>
                        <div className="movie">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <h4>{movie.original_title}</h4>
                        </div>
                    </a>
                </Link>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }

                .movie {
                    cursor: pointer;
                }

                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    //서버에서만 작동할 수 있게 하는 함수
    // 항상 서버사이드 랜더링을 하고 싶을 때 즉, 데이터가 유효할 때 화면이 보여지게 되는게 좋을 때
    // api loading이 길어지면 loading이 없는 대신에 유저가 아무것도 보지 못한 채로 오래기다려야 한다는 단점이 있음
    // api를 서버에서 불러오기 때문에 loading이 생기지 않는다.
    const { results } = await (await fetch(`http://localhost:3000//api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}
