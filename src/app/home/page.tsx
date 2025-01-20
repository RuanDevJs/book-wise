import clientPromise from "@/lib/MongoClient"

const IMAGES = [
  "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
  "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81MoknVer8L.jpg",
  "https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg",
  "https://m.media-amazon.com/images/I/61ooZHl+CTL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61xuJwg9fiL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/613-pa+n7cL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61hewOW+8zL.jpg",
  "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/91mH07aKF8L._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/A1jk2ppjsCL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/A1Sq8q77OfL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81MLf-pgXrL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71SKqtvjBAL.jpg",
  "https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg"
]


export default async function page() {
  async function insertBooksInDatabase() {
    const client = await clientPromise()
    client?.db('Book-Wise').collection('books').insertOne({
      title: 'O Hobbit',
      description: '"O Hobbit", de J.R.R. Tolkien, narra a jornada de Bilbo Bolseiro, um hobbit tranquilo que é arrastado para uma aventura épica. Guiado por Gandalf e acompanhado por anões, Bilbo enfrenta trolls, elfos, e dragões enquanto descobre coragem e astúcia inesperadas. No centro, está a busca pelo tesouro de Smaug.',
      picture: 'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg',
      author: "J.R.R Tolkien",
      published_at: new Date(),
      star_rating: 5,
      comments: [],
      user: {
        _id: '313123',
        picture: 'https://avatars.githubusercontent.com/u/82915279?v=4',
        username: 'RuanDevJs'
      }
    }, {
      forceServerObjectId: true
    })
  }

  // await insertBooksInDatabase();

  return (
    <main className='grid grid-cols-3'>
      {IMAGES.map((pictureUrl) => <img
        src={pictureUrl}
        key={pictureUrl}
        alt=""
        className='w-[150px] h-[220px] object-cover'
      />)}

    </main>
  )
}
