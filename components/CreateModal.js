export default function CreateModal() {
    const createTodo = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/create', {
            body: JSON.stringify({
                item: event.target.todo.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    };

    return (
        <form onSubmit={createTodo}>
            <label htmlFor="todo">New To Do Item:</label>
            <input id="todo" name="todo" type="text" required />
            <input type="submit" value="add" />
        </form>
    );
}
