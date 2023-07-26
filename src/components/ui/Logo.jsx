import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Image src={'/logo.svg'} alt="Logo" width={155} height={43} />
        </Link>
    );
};

export default Logo;
