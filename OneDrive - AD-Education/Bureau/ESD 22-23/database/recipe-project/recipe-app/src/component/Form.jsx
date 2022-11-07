import { useState } from "react";

const FormRecipe = ({FetchAllRecipes}) => {;
    
    const [credentials, setCredentials] = useState({})

    const handleChange = (event) =>{
        const {value, name} = event.target;
        setCredentials({
            ...credentials, 
            [name]: value
        });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        fetch(`${process.env.REACT_APP_URL_API}/recipes}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(data => FetchAllRecipes())

    }
    
            

    return ( 
        <form>
            <input type="text" name="title" placeholder="Entrez le titre de la recette" onChange={handleChange} />
            <input type="text" name="title" placeholder="Entrez la catégorie de la recette" onChange={handleChange} />
            <input type="submit" value="Ajouter" onClick={handleSubmit}/>
      </form>
     );
}
 
export default FormRecipe;