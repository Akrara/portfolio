import styles from '@/styles/AboutLayout.module.scss';
import TypeWriter from './TypeWriter';
export default function AboutLayout() {

    return (
        <div className={styles.wrapper}>
            <TypeWriter text="<p>I am a 4th year student at Vietnam National University-University of Science. I am learning to become a front-end developer and would love for a chance to work at a company.</p>
        <p>I am also passionate about my work and try my best to improve and fix my shortcomings.</p>"  delay={20} />
            <section>
                <h3 style={{ color: "#2de251" }}>My education</h3>
                <ul style={{ listStyle: "", lineHeight: "2rem" }}>
                    <li><p>2017-2020</p><p>Studied at Ben Tre Highschool for the Gifted</p></li>
                    <li><p>2020-2024 (expected)</p><p>Studying at Vietnam National University-University of Science</p></li>
                </ul>
            </section>
            <section>
                <h3 style={{ color: "#2de251" }}>My hobbies</h3>
                <ul style={{ listStyle: "", lineHeight: "2.5rem" }}>
                    <li><p>Reading books</p></li>
                    <li><p>Playing games</p></li>
                    <li><p>Watching movies (anime specifically)</p></li>
                    <li><p>Listening to music</p></li>
                </ul>
            </section>
        </div>
    )
}