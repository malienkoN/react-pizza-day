// components
import Counter from "../components/Counter";
import TodoList from "../components/TodoList";

const Home = () => {
    return (
        <>
            <h1 className="title">
                The best pizza.
                <br />
                <span className="text-yellow">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            <Counter />
            <TodoList />
        </>
    );
};

export default Home;
