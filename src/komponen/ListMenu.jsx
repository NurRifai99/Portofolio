const ListMenu = ({nama, link}) => {
    return(
        <a href={link} className="w-full bg-green-500 mx px-4 py-2">{nama}</a>
    )
}
export default ListMenu