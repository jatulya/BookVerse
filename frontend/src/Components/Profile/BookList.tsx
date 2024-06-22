/*import React, { useState } from 'react';
import { Book, Props } from '../Interfaces';

const BookListManager: React.FC<Props> = ({ tbrList, readList, onDeleteBook }) => {
  const [selectedBooks, setSelectedBooks] = useState<Record<string, boolean>>({});
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const handleButtonClick = (listType: 'tbr' | 'read') => {
    setShowDeleteMessage(true);
  };

  const handleBookSelect = (bookId: number, listType: 'tbr' | 'read') => {
    setSelectedBooks((prevSelectedBooks) => ({
      ...prevSelectedBooks,
      [`${listType}_${bookId}`]: !prevSelectedBooks[`${listType}_${bookId}`],
    }));
  };

  const handleDeleteBooks = (listType: 'tbr' | 'read') => {
    const booksToDelete = Object.keys(selectedBooks).filter((key) => key.startsWith(listType));
    booksToDelete.forEach((key) => {
      const bookId = parseInt(key.split('_')[1], 10);
      onDeleteBook(bookId, listType);
    });
    setSelectedBooks({});
    setShowDeleteMessage(false);
  };

  return (
    <div>

      {showDeleteMessage && (
        <div>
          <p>Select the books to be deleted:</p>
          <ul>
            {tbrList.map((book) => (
              <li key={book.id}>
                <input
                  type="checkbox"
                  checked={selectedBooks[`tbr_${book.id}`]}
                  onChange={() => handleBookSelect(book.id, 'tbr')}
                />
                {book.title}
              </li>
            ))}
            {readList.map((book) => (
              <li key={book.id}>
                <input
                  type="checkbox"
                  checked={selectedBooks[`read_${book.id}`]}
                  onChange={() => handleBookSelect(book.id, 'read')}
                />
                {book.title}
              </li>
            ))}
          </ul>
          <button onClick={() => handleDeleteBooks('tbr')}>Delete from TBR List</button>
          <button onClick={() => handleDeleteBooks('read')}>Delete from Read List</button>
        </div>
      )}
    </div>
  );
};*/

export {};