import Book from './Book';

const books = [
  {
    id: 1,
    author: 'Kazi Nasrul Islam',
    title: 'Agni Veena',
  },
  {
    id: 1,
    author: 'Bankimchandra Chattopadhyay',
    title: 'Anand Math',
  },
];
const Books = () => (
  <div>
    {
      books.map((item) => <Book key={item.key} title={item.title} author={item.author} />)
    }
  </div>
);

export default Books;
