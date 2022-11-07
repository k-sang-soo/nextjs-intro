const API_KEY = process.env.API_KEY; //env 사용 시 git ignore 잊지말자

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/contact', // contact 라는 주소로 유저가 이동 시
                destination: '/form', // form 으로 이동 시킨다
                permanent: false, // 영구적인지 아닌지에 따라서 브라우저나 검색엔진이 이 정보를 기억한다.
            },
        ];
    },
    async rewrites() {
        // rewrites는 유저를 redirect 시키지만 주소는 변하지 않는다.
        return [
            {
                source: '/api/movies',
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: '/api/movies/:id',
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
