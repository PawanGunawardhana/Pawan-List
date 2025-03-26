export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { person: data },
  };
};

const Details = ({ person }) => {
  return (
      <div>
          <h1>Person Details</h1>
          <div>
              <h3>{ person.name }</h3>
              <p>{person.email}</p>
              <p>{person.phone}</p>
              <p>{person.address.city}</p>
              <p>{person.website}</p>

          </div>
    </div>
  );
};

export default Details;
