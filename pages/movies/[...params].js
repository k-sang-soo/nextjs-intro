import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from '../../components/Seo';

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || []; // || [] 해준 이유는 브라우저에서 javascript 차단 했을 떄도 보이게 하기 위해
    console.log('router', params);
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    // 유저에게 loading 페이지를 보여주지 않고 seo 최적화도 하기위한 방법
    //매개변수를 통해서 server-side context를 제공해줌
    return {
        props: {
            params,
        },
    };
}
