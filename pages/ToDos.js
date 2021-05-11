const { APP_URL } = process.env

function ToDos({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.id}</li>
      ))}
    </ul>
  )
}



export async function getStaticProps() {
  const res = await fetch(`${APP_URL}/api/todo`)
  const items = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      items,
    }, 
  }
}

export default ToDos

