const { APP_URL } = process.env
 
function ToDos({items}) {
    console.log(items)
    return (
      null
    )
  }

export async function getServerSideProps() {
  const res = await fetch(`${APP_URL}/api/todo`)
  const items = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      items
    }, // will be passed to the page component as props
  }
}

export default ToDos

