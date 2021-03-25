import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-nextjs',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, officia porro ut, quae aliquam, reprehenderit perspiciatis commodi suscipit optio accusamus quis. Quasi doloremque adipisci ad nisi, optio voluptas eaque veniam.',
        date: '2021-03-10',
    },
    {
        slug: 'getting-started-nextjs2',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, officia porro ut, quae aliquam, reprehenderit perspiciatis commodi suscipit optio accusamus quis. Quasi doloremque adipisci ad nisi, optio voluptas eaque veniam.',
        date: '2021-03-10',
    },
    {
        slug: 'getting-started-nextjs3',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, officia porro ut, quae aliquam, reprehenderit perspiciatis commodi suscipit optio accusamus quis. Quasi doloremque adipisci ad nisi, optio voluptas eaque veniam.',
        date: '2021-03-10',
    },
    {
        slug: 'getting-started-nextjs4',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, officia porro ut, quae aliquam, reprehenderit perspiciatis commodi suscipit optio accusamus quis. Quasi doloremque adipisci ad nisi, optio voluptas eaque veniam.',
        date: '2021-03-10',
    },
];

const AllPostPage = (props) => {
    return (
        <>
            <AllPosts posts={props.posts} />
        </>
    );
};

export default AllPostPage;

export const getStaticProps = async (ctx) => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
};
