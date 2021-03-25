import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section>
            <div className={classes.hero}>
                <div className={classes.image}>
                    <Image
                        src="/images/site/anhdaidienmoi.jpg"
                        alt="An image showing Max"
                        width={300}
                        height={300}
                    />
                </div>
                <h1>Hi, I'm Hoang</h1>
                <p>
                    I blog about web development - especially frontend
                    frameworks like React
                </p>
            </div>
        </section>
    );
};

export default Hero;
