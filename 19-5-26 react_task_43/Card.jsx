function Card() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="max-w-sm p-6 bg-green-200 rounded-2xl shadow-2xl border border-gray-200  text-center">
      
      <img
        src="https://picsum.photos/400/200"
        alt="card"
        className="rounded-xl mb-4"
      />

      <h2 className="text-2xl font-bold text-black mb-2">
        Shanmuga priyan
      </h2>

      <p className="text-black leading-relaxed mb-4">
        Id : 230282601112
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Read More
      </button>

    </div>
    </div>
  )
}

export default Card