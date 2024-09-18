import { useState } from "react"

function MaahMaah(){

    const [index, setIndex] = useState(0)

    const btnNext = () => {
        if(index < quotes.length-1){
            setIndex(index + 1)
        }
    }

    const btnPro = () => {
        if(index > 0){
            setIndex(index - 1)
        }
    }

    const quotes = [
        "1: Gacmo Wadajir bay wax ku gooyaan",
        "2: Intaadan falin Kafiirso",
        "3: Farkaligeed Fool Madhaqdo",
        "4: Hadal Badan Haan mabuuxsho"
    ]

    return <div>
        <h1 className={`${index === quotes.length-1 ? "block" : "hidden"} text-4xl text-red-500 text-center font-semibold pt-10`}>Dhamaad</h1>
        <h1  className={`text-4xl font-bold text-center pt-20 ${index == 2 ? "text-red-500" : "text-black"}`}>{quotes[index]}</h1>
        <button onClick={btnPro}  className="bg-blue-400 px-8 py-2 rounded-lg text-2xl text-white font-semibold ml-[40%]">Pro</button>
        <button onClick={btnNext} className="bg-blue-400 px-8 py-2 rounded-lg text-2xl text-white font-semibold ml-6 mt-14">Next</button>
    </div>
}

export default MaahMaah