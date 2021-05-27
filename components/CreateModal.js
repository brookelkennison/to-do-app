export default function CreateModal() {
    const createTodo = async event => {
        console.log(event)
      event.preventDefault()
  
      const res = await fetch(
        '/api/todo',
        {
          body: JSON.stringify({
            item: event.target.todo.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
    }
  
    return (
      <form onSubmit={createTodo}>
        <label htmlFor="todo">New To Do Item:</label>
        <input id="todo" name="todo" type="text" required />
        <input type="submit" value="add"/>
      </form>
    )
  }