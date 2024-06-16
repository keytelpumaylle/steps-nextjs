
import { ActiveLink } from "./activeLink/ActiveLink";

const navItems = [
    {path:'/', text:'Inicio'},
    {path:'/about', text:'About'},
    {path:'/pricing', text:'Pricing'},
]

export const Navbar = () => {

  return (
    <div className="bg-slate-900 flex rounded-sm p-4 justify-between">
        <h1>Navbar Group General</h1>
        <div className="flex gap-4">
            {
                navItems.map(({path, text}) =>(
                    <ActiveLink key={path} path={path} text={text}/>
                ))
            }
        </div>
    </div>
  );
}