import "../css/Loader.scss"

const Loader = () => {
    return (
        <div className="fixed w-screen h-screen flex items-center justify-center z-50 bg-white">
            <div className="loader ">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Loader