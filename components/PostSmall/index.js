import Link from 'next/link';
import Image from 'next/image';

export default function PostSmall ({ onLike, onComment, onShare, href, post, user, className}) {
    return (
        <div className={'lex flex-col overflow-hidden rounded-lg shadow-lg' + className}>
<div className="flex flex-1 flex-col justify-between p-6 pb-3"> 
<Link href={href}>
    <div className="mt-2 flex item-center">
        <div className="flex-shrink-0 text-gray-100">
            {user?.image && 
            <Image 
        className="h-12 w-12 rounded-full"
    src={user.image}
width={50}
height={50}
alt=""
/>
}
        </div>
    </div>
</Link>
</div>
        </div>
    )
}

