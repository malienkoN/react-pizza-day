import Header from "./components/Header";
import Form from "./components/Form";
import MenuList from "./components/MenuList";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <h1 className="title">
                    The best pizza.
                    <br />
                    <span className="text-yellow">
                        Straight out of the oven, straight to you.
                    </span>
                </h1>
                <p className="sub-title">
                    👋 Welcome! Please start by telling us your name:
                </p>
                <Form />
                <Counter />
                <TodoList />
                <MenuList />
            </main>
        </div>
    );
}

export default App;
