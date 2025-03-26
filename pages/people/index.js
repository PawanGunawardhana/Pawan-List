import Link from "next/link";
import styles from "../../styles/Peoples.module.css";

export const getStaticProps = async () => {
  // this function runs at build time as our app is built and our component rendered
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //async method
  const data = await res.json(); //this is also async method, this is an array of objects

  return {
    props: { people: data },
  };
};

const People = ({ people }) => {
  return (
    <div>
      <h1>People</h1>
      {people.map((person) => {
        return (
          <Link
            href={"/people/" + person.id}
            className={styles.single}
            key={person.id}
          >
            <h3>{person.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default People;
