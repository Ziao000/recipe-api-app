import { useState } from "react";

const RecipeItem = ({handleDelete, handleUpdate, recipe}) => {
    const [edit, setEdit] = useState(false)
    const  [title, setTtitle] = useState(recipe.title)
    return ( 
    
    <li key={recipe.id} className="recipe-list__item">

        {
            edit ? (
                <form onSubmit={() => handleUpdate(recipe, title)}>
                    <input type="text" defaultValue={title} onChange={(e) => setTtitle(e.target.value)}/>
                    <input type="submit" value="Valider"/>

                </form> 

            ) : (
                <h3>{recipe.title}</h3>
            )
        }
        {/* <input type="text" name="title" value={recipe.title} onChange={(event) => handleUpdate({...recipe, title: event.target.value})} /> */}
        {/* <input type="text" name="title" defaultValue={recipe.title} /> */}
        <button onClick={() => handleDelete(recipe)}>Supprimer</button>
   
        <button onClick={() => setEdit(true)}>Modifier</button>
    </li> );
    
}
 
export default RecipeItem;