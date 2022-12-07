import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from "axios";
import { Post } from "../../../../types";

const PostPage = () => {
    const router = useRouter();
    const { identifier, sub, slug } = router.query;

    const { data: post, error } = useSWR<Post>(identifier && slug ? `/posts/${identifier}/${slug}` : null);
    return 
        
}

export default PostPage