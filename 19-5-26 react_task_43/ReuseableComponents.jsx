function ReuseableComponents({ children, variant = "primary" }) {

  // Common classes
  const baseClasses =
    "px-4 py-2 rounded-lg font-semibold transition"

  // Different styles
  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600",

    danger:
      "bg-red-500 text-white hover:bg-red-600",

    success:
      "bg-green-500 text-white hover:bg-green-600",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default ReuseableComponents