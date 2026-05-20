function ButtonGroup() {
  return (
    <div className="flex gap-4 m-10">
      
      <button
        className="
          px-5 py-2 rounded-lg bg-blue-500 text-white
          hover:bg-blue-600
          focus:outline-none focus:ring-4 focus:ring-blue-300
          active:scale-95
          transition
        "
      >
        Save
      </button>

      <button
        className="
          px-5 py-2 rounded-lg bg-red-500 text-white
          hover:bg-red-600
          focus:outline-none focus:ring-4 focus:ring-red-300
          active:scale-95
          transition
        "
      >
        Delete
      </button>

    </div>
  )
}

export default ButtonGroup