

const ExcitedToy = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="lg:w-1/2 relative gap-4 mb-20">
             <img src="https://i.ibb.co/2k9ZnqV/iut.png" className="w-3/4 rounded-lg border-8 border-secondary shadow-2xl" />
             <img src="https://i.ibb.co/6H0VjDn/wdopwe.png" className="w-1/2 right-5 top-2/3 absolute border-8 border-secondary rounded-lg  shadow-2xl" />
             <img src="https://i.ibb.co/znw6GJy/adds.png" className="absolute w-44 top-2 border-8 border-secondary" alt="" />
            
             </div>
                <div className="lg:w-1/2 space-y-5 p-4">
                    <h3 className="text-5xl text-violet-600 font-bold">Exciting New Toys</h3>
                    <h1 className="text-3xl text-violet-600 font-bold">Solar System Model Kit</h1>
                    <h1 className="text-3xl text-violet-600 font-bold mt-5">About this item</h1>

                    <p className="py-6 text-zinc-600">ASSEMBLY POINTS FOR ATTENTION: When you receive the product, please first carefully check whether the components of the product are damaged first; When you are installing, please note that there is no gap in the middle of the pole, and make sure to hear a slight click when you press the solar sphere down,</p>
                    <button className="btn btn-accent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ExcitedToy;