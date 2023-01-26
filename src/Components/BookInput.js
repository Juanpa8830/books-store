import React from 'react';

const BookInput = () => (

  <div>
    <form>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <button type="submit" className="AdBtn">Add Book</button>
    </form>
  </div>

);

export default BookInput;
