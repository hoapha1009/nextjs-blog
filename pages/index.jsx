import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

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

export default function Home(props) {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
}

export const getStaticProps = async (ctx) => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
};
