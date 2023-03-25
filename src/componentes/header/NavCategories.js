import React from "react";
import {Link} from "react-router-dom";

const  NavCategories = () => {
    const categories = [
        {id: 1, name:"Collares", route: "/category/Collares"},
        {id: 2, name:"Aritos", route: "/category/Aritos"},
        {id: 3, name:"Posters", route: "/category/Posters"},
        {id: 4, name:"Figuras", route: "/category/Figuras"},
    ]

    return (
        <>
        <nav>
            {
                (categories.map((category) =>{
                    return(
                        <Link key={category.id} style={styles.categories} to={category.route}>
                            {category.name}
                        </Link>
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