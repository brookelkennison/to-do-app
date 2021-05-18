export default function ToDos(todo) {
  const data = todo.data
  return (
    <ol>
      {data.map((todo) => (
        <li key={todo.item}>{todo.item}</li>
      ))}
    </ol>
  )
}


