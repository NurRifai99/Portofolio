
const Sidemenu =({page,onselectpage,activepage}) => {
    return(
        <button 
            onClick={() => onselectpage(page)} 
            className={`block w-full text-left px-2 py-1  ${page === activepage  ? "bg-[#1e1e1e] outline-1  outline-orange-400" : "hover:bg-[#1e1e1e] hover:outline-1 hover:outline-dashed hover:outline-orange-400"} `} >
                +{page}.html
        </button>
    )
}

export default Sidemenu;