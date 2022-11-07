import { toast } from "react-toastify";
import RecipeItem from "./RecipeItem";

const RecipeList = ({recipe, FetchAllRecipes}) => {

    const handleUpdate = (recipe, title) => {

        
        fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title : title})
        })
        .then(response => response.json())
        .then(data => {
            toast.success("La recette a bien été modifiée");
            FetchAllRecipes();
        })
    }

    const handleDelete = (recipe) => {
        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette recette ?");

        if(confirmDelete){
                fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
       .then(res => {
        toast("La recette a bien été supprimée");
        FetchAllRecipes()
       })
    }
    }


    return ( 
        <div>
            <ul className="recipe-list">
            {recipe && recipe.map( recipe => (
                <RecipeItem 
                key={recipe.id} 
                recipe={recipe} 
                handleDelete={handleDelete} 
                handleUpdate={handleUpdate}/>
                ))}
                
        </ul>
        </div>
        
     );
}
 
export default RecipeList;