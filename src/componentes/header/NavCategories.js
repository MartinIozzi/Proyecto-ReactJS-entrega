import React from "react";
import {NavLink} from "react-router-dom";

const NavCategories = () => {
    const categories = [
        {id: 1, name:"Collares", route: "categories/collares"},
        {id: 2, name:"Aritos", route: "categories/aritos"},
        {id: 3, name:"Posters", route: "categories/posters"},
        {id: 4, name:"Figuras", route: "categories/figuras"},
    ]

    return (
        <>
        <nav>
            {
                (categories.map((category) =>{
                    return(
                        <NavLink key={category.id} style={styles.categories} to={category.route}>
                            {category.name}
                        </NavLink>
                    );
                }))
            }
        </nav>
          </>
    )
}

const styles = {
    categories: { 
        paddingLeft: 100,
        marginRight: 30,
        fontSize: 30,
        color: "black",
        textDecoration: "none",
    }
}


export default NavCategories;