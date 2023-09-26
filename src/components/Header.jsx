
const Header = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/7py7rLm/bg.png')] mx-auto max-w-[1300px] h-[600px]">
            <div className="max-w-[1300px] h-[600px] bg-gray-200 opacity-95 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-center mb-7">I Grow By Helping People In Need</h2>
                <div className="w-full mx-auto flex justify-center items-center">
                    <input type="text" className="w-[50%] h-[50px] rounded-lg px-4" placeholder="search here..."/>
                    <button className="w-[80px] h-[50px] bg-[#FF444A] -m-2 text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;