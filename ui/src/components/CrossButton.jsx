const Button=({onClick})=>{
    return(
        <button onClick={onClick} className="absolute top-4 right-4 p-2 border rounded bg-white text-white z-50">
            <img src="/cross.svg" />
        </button>
    )
}

export default Button