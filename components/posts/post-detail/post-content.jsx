import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';

const DUMMY_POST = {
    slug: 'getting-started-nextjs4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, officia porro ut, quae aliquam, reprehenderit perspiciatis commodi suscipit optio accusamus quis. Quasi doloremque adipisci ad nisi, optio voluptas eaque veniam.',
    date: '2021-03-10',
    content: '# this is first post',
};
const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

const PostContent = () => {
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.slug} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
