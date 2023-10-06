import { useEffect, useState } from "react"
import "./ModalEditar.scss"


export default function ModalEditar({produtoId, open , setOpen}){
    document.title = "EDITAR"

   const id = produtoId
   console.log(id)
   
    const [produto, setProduto] = useState({
      id: id,
      nome: "",
      desc: "",
      preco: "",
      
      })

     useEffect(() => {
      fetch(`http://localhost:5000/produtos/${id}`,{
        method: 'GET',
        headers: {
          "Content-Type" : "application/json"
        }
      })
      .then((response) => response.json())
      .then((response) => setProduto(response))
      .catch(error=>console.log(error))
     },[id])


     const handleChange = (e) => {
      const { name, value } = e.target;
      setProduto({ ...produto, [name]: value })
  }

     const handeSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:5000/produtos/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(produto)
      })
      .then((response) => console.log(response.status))
     .catch(error=>console.log(error))
     
      setOpen(false)
     


     }
         
      
    


    if (open) {
      return (
        <div className= "container">
          <div>
            <form onSubmit={handeSubmit} >
              <fieldset>
                <span onClick={()=> setOpen(false)}>X</span>
                <legend>Editar Produto</legend>
                <div>
                  <label htmlFor="idProd">Editar Nome do Produto:</label>
                  <input
                    type="text"
                    name="nome"
                    id="idProd"
                    value={produto.nome}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label htmlFor="idDesc">Editar a Descrição:</label>
                  <input
                    type="text"
                    name="desc"
                    id="idDesc"
                    value={produto.desc}
                    onChange={handleChange}
                  
                  />
                </div>
                <div>
                  <label htmlFor="idPreco"> Editar o Preço:</label>
                  <input
                    type="text"
                    name="preco"
                    id="idPreco"
                    value={produto.preco}
                    onChange={handleChange}
                   
                  />
                </div>
                <div>
                  <label htmlFor="idImg"> Editar a Imagem:</label>
                  <input
                    type="url"
                    name="img"
                    id="idImg"
                    value={produto.img}
                    onChange={handleChange}
                   
                  />
                </div>
                <div>
                  <button>Editar</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
  

  }