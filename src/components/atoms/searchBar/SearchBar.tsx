"use client";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  inputSearchBar?: string;
};
export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form className="lg:w-1/2 px-2 lg:px-5" onSubmit={handleSubmit(onSubmit)}>
      <input
        data-testid="input-searchbar"
        className="shadow appearance-none border rounded-full  w-full py-5 px-7 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
        {...register("inputSearchBar")}
        placeholder={`Search ... `}
      />
    </form>
  );
};
