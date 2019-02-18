// resolve Query
const people = [
  {
    name: 'hyeon',
    age: 27,
    gender: 'male',
  },
  {
    name: '1',
    age: 27,
    gender: 'male',
  },
  {
    name: '2',
    age: 27,
    gender: 'male',
  },
  {
    name: '3',
    age: 27,
    gender: 'male',
  }
];

const resolvers = {
  Query: {
    people:() => people
  }
};

export default resolvers;