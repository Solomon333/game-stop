const fixedInputClass =" hover:bg-gray-50 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placholder-gray-500 text-gray-900 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"


 function FormInput ({
  handleChange,
  value,
  lableText,
  lableFor,
  id,
  name,
  type,
  isRequired= true,
  placeholder,
  customClass

}){
  return (
    <div className="my-5 ">
      <lable htmlFor={lableFor} className="sr-only">
        {lableText}
      </lable>
      <input 
      onChange={handleChange}
      value={value}
      id={id}
      name={name}
      type={type}
      required={isRequired}
      className={fixedInputClass+customClass}
      placeholder={placeholder}
      />
    </div>
  )
  }




export default FormInput