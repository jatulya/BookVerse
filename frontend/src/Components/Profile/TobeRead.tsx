import {useState} from 'react'

const TobeRead = () => {
    const [newBook, setNewBook] = useState<string>("");
    const [tbrbook, settbrBook] = useState<String[]>([])
    const [read, setRead] = useState<String[]>([])

    return (
        <div>
            <h2>MY TBR LIST</h2>
            <input
                type="text"
                placeholder="New book"
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                    settbrBook([...tbrbook, newBook]);
                    setNewBook("");
                    }
                }}
            />
            {tbrbook.map((book, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" style={{ marginRight: 10 }} />
                        <h5 style={{ margin: 0 }}>{book}</h5>
                    </div>
                );
            })}
            <h2>MY TBR LIST</h2>
            <input
                type="text"
                placeholder="New book"
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                    setRead([...read, newBook]);
                    setNewBook("");
                    }
                }}
            />
            {read.map((book, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" style={{ marginRight: 10 }} />
                        <h5 style={{ margin: 0 }}>{book}</h5>
                    </div>
                );
            })}     
        </div>
  )
}

export default TobeRead
