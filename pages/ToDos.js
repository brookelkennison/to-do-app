export default function ToDos(todo) {
    const data = todo.data;
    const deleteTodo = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/todo', {
            body: JSON.stringify({
                _id: event.target.id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
    };
    return (
        <ol>
            {data.map((todo) => (
                <li key={todo.item}>
                    {todo.item}{' '}
                    <button id={todo._id} onClick={deleteTodo}>
                        delete
                    </button>
                </li>
            ))}
        </ol>
    );
}
