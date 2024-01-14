import { useForm } from "react-hook-form";

interface UserData {
  id: string;
  password: string;
}

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = (data: UserData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("id", { required: "ID를 입력해주세요" })}
      />
      {errors.id?.message}
      <br />

      <input
        type="password"
        {...register("password", { required: "비밀번호를 입력해주세요" })}
      />
      {errors.password?.message}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
