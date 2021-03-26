import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/posts-util';
import Head from 'next/head';

const PostDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    );
};

export default PostDetailPage;

export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths = async () => {
    const postFilenames = getPostFiles();

    const slugs = postFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
};
