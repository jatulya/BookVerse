import {useState} from 'react'
import '../../globals.css'

const TobeRead = () => {
    const [newBook, setNewBook] = useState<string>("");
    const [tbrBook, setTbrBook] = useState<string[]>([])
    const [readBook, setReadBook] = useState<string>("")
    const [read, setRead] = useState<string[]>([])
    const [checkedBooks, setCheckedBooks] = useState<{ [key: string]: boolean }>({});
   
    const addToList = (e: React.KeyboardEvent<HTMLInputElement>, type : 'tbr' | 'read') =>{
        if (e.key === 'Enter'){
            if (type === 'tbr'){
                setTbrBook([newBook,...tbrBook ])
                setCheckedBooks((prev) => ({...prev, [newBook]:false}));
                setNewBook('')
            }else if (type === 'read'){
                setRead([readBook,...read])
                setReadBook('')
            }
        }
    }

    const checkClick = (book: string, checked: boolean) => {
        if (checked) {
            setRead([...read, book]);
        } else {
            setRead(read.filter((b) => b !== book));
        }
        setCheckedBooks(prevState => ({
            ...prevState,
            [book]: !prevState[book]
        }))    
    };

    return (
        <div className='toberead'>
          <div>
            <h2>MY TBR LIST</h2>
            <input
                type="text"
                placeholder="New book"
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                onKeyUp={(e) => { addToList(e,'tbr')}}
            />
            {tbrBook.map((book, index) => {
                return (
                    <div key={index} 
                         style={{ display: "flex"}}>
                        <input 
                            type="checkbox" 
                            checked={checkedBooks[book] || false}
                            onChange={(e) => checkClick(book, e.target.checked)}
                        />
                        <h5 style={{ textDecoration: checkedBooks[book] ? 'line-through' : 'none' }}>
                        {book}
                        </h5>
                    </div>
                );
            })}
          </div>

          <div>
            <h2>MY READ LIST</h2>
            <input
                type="text"
                placeholder="New book"
                value={readBook}
                onChange={(e) => setReadBook(e.target.value)}
                onKeyUp={(e) => { addToList(e,'read')}}
            />
            <ul>
                {read.map((book, index) => {
                    return (
                        <li key={index}>
                            <h5>{book}</h5>
                        </li>
                    );
                })} 
            </ul> 
          </div>
        </div>
  )
}

export default TobeRead


/*
    trim() : removes white spaces, newline etc => prevents from adding empty string to the list ( in case user press enter without typing a name)
 
 */

    