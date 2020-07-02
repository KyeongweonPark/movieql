import { getMovies } from "./db";

let people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Nicolas2",
    age: 18,
    gender: "female",
  },
  {
    id: "3",
    name: "Nicolas3",
    age: 18,
    gender: "female",
  },
  {
    id: "4",
    name: "Nicolas4",
    age: 18,
    gender: "female",
  },
];

const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};

const deleteById = (id) => {
  const cleanedPeople = people.filter((person) => id !== person.id);
  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

const addPerson = (name, age, gender) => {
  const NewPeople = { id: `${people.length + 1}`, name, age, gender };
  people.push(NewPeople);
  return NewPeople;
};
const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    delPerson: (_, { id }) => deleteById(id),
  },
};
export default resolvers;
