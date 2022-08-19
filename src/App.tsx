import { ChessboardComponent } from "./components/ChessboardComponent";

const App = () => {
  return (
    <div className="">
      <header className=" flex gap-1 items-center text-2xl sm:text-3xl font-semibold p-2 px-10">
        <img src="/knight.svg" alt="logo" className="h-6 sm:h-10" />

        <h1>
          <span className="  text-teal-500">Knight</span> Moves
        </h1>
      </header>
      <main className="flex flex-col items-center">
        <p className="text-xl pt-10 pb-5">
          Hey, select any position and we'll highlight all the possible moves
          for you 🤙
        </p>
        <ChessboardComponent />
      </main>
    </div>
  );
};

export default App;
