
const navitems=[
  {title:"Home",link:"/home"},
  {title:"Projects",link:"/projects"},
  {title:"About",link:"/about"},
  {title:"Contact",link:"/contact"},
]
export const Header = () => {
 
  return <div className="flex justify-center items-center relative top-3">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur" >
      {navitems.map((items,index)=>(
        <a className={navitems.length===index+1?"nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900":"nav-item"} href={items.link}>{items.title}</a>
      ))}
    </nav>
  </div>;
};
