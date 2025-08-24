
const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen max-h-screen bg-top bg-no-repeat border">
            <nav className='flex content-center justify-between w-full px-[54px] py-[32px]'>
                <img
                    src="/logo.png"
                    alt="My Image"
                    className='w-auto h-[35px]'
                />
                <button className="border-[2px] border-[#212121] bg-transparent text-sm font-semibold w-[136px] h-[48px] hover:text-white hover:bg-black transition ease-in-out delay-50">SIGN
                    IN
                </button>
            </nav>
            {children}
            <footer className="text-center mt-[110px] mt-auto py-5">© 2021. - 2025 All Rights Reserved. <span className=''>Eventify</span> </footer>
        </div>
    )
}

export default AuthLayout