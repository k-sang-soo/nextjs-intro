import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Detail() {
    const router = useRouter();
    console.log('router', router);
    return 'detail';
}
