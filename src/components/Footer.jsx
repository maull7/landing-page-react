

const Footer = () => {
    return(
       <div className="footer bg-white shadow mt-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="py-4">Copyright by <span className="font-bold text-cyan-500 underline">Rehan Maulana</span></p>
            <div className="social-footer flex items-center sm:gap-7 gap-2">
                <i className="ri-facebook-fill text-2xl"></i>
                <i className="ri-twiter-fill text-2xl"></i>
                <i className="ri-youtube-fill text-2xl"></i>
                <i className="ri-tiktok-fill text-2xl"></i>
                <i className="ri-reddit-fill text-2xl"></i>
            </div>
        </div>
       </div>
    )
}

export default Footer