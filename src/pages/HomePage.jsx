
import BookCategory from '../components/BookCategory.jsx';
import PopularBooks from '../components/PopularBooks.jsx';
import { useSelector } from 'react-redux';


const HomePage = () => {

    let books = useSelector((state) => state.books);

    // console.log(books);
    
  return (
    <div className='mt-[100px]'>
      
      <BookCategory books={books} />
      <PopularBooks books={books} />

    </div>
  )
}

export default HomePage
