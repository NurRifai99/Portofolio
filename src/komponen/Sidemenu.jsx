
const Sidemenu =({page,onselectpage,activepage}) => {
    return(
        <button 
            onClick={() => onselectpage(page)} 
            className={`flex flex-row gap-1 w-full text-left text-sm pl-6 py-1  ${page === activepage  ? "bg-[#1e1e1e] outline-1  outline-orange-400" : "hover:bg-[#1e1e1e] hover:outline-1 hover:outline-dashed hover:outline-orange-400"} `} >
                <svg xmlns="http://www.w3.org/2000/svg" width="15px"  viewBox="0 0 16 16"><path fill="#ea580c" d="M4.708 5.578L2.061 8.224l2.647 2.646l-.708.708l-3-3V7.87l3-3zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708l3-3V7.87zM4.908 13l.894.448l5-10L9.908 3z"/></svg>
                {page}.html
        </button>
    )
}

export default Sidemenu;