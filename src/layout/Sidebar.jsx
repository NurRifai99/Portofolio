import ListMenu from '/src/komponen/ListMenu.jsx'

const Sidebar = ({}) =>{
    return(
        <div className='flex flex-col w-auto '>
            <ListMenu nama="home"/>
            
            <ListMenu nama="about"/>
        </div>
    )
}

export default Sidebar