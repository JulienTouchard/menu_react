import React,{useState} from "react";
import Logo from "../Logo/Logo";
import UlMenu from "../UlMenu/UlMenu";
import Burger from "../Burger/Burger";
import Search from "../Search/Search";
import "./Navigation.css";

const dataMenu = [
    {
        titre: "Accueil",
        url: "#",
        isActive: true
    },
    {
        titre: "Panier",
        url: "#",
        isActive: false
    },
    {
        titre: "Contact",
        url: "#",
        isActive: false
    }
]
function responsive() {
    let orientation;//true=>mobile
    // ou utiliser l'event "deviceOrientation"
    if (window.innerWidth > window.innerHeight) {
        orientation = false;
    } else {
        orientation = true;
    }
    return orientation;
}
const Navigation = () => {
    //let orientation = responsive();//true=>mobil ne marchera pas dans la vue
    // utilisation de state dans un component fonctionnel
    const [orientation, setOrientation] = useState(responsive());
    const [displayUl, setDisplayUl] = useState(orientation ? false : true);
    const [tabMenuNav, settabMenuNav] = useState(dataMenu);
    // en cas de redimensionnement de l'ecran 
    window.addEventListener("resize", () => {
        setOrientation(responsive());
        setDisplayUl(!orientation);
    });
    return (
        <nav className="navMenu">
            {/* La props children (ici "Ceppic") sera
                systematiquement au format string */}
            <Logo>CostumShop</Logo>
            {
                displayUl ? <UlMenu orientation={orientation} tabMenuNav={tabMenuNav}></UlMenu> : <></>
            }
            {
                orientation ? <Burger click={() => setDisplayUl(!displayUl)}></Burger> : <></>      
            }
        </nav>
    )
}
export default Navigation