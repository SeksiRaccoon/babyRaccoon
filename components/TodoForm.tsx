import Reacr, {  useRef } from "react";

interface TodoFormProps{
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
//   const [title, setTitle] = useState<string>(" ");
//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setTitle(event.target.value)
//   };
  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter'){
          props.onAdd(ref.current!.value)
          ref.current!.value = ""
        // console.log(title)
        // setTitle('')
      }
  };
  return (
    <div className="input-field mt2">
      <input
        // value={title}
        // onChange={(event)=> setTitle(event.target.value) }
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      ></input>
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
