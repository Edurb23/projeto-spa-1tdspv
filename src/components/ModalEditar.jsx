import { useEffect, useState } from "react"
import { json } from "react-router-dom";

export default function ModalEditar(){
    document.title = "EDITAR"

    const [listaLocalProdutos, setLocalProdutos] = useState([{}]);

    const produtoRetornadoDoFiltro = ListaProdutos.filter(
        (produto) => produto.id == id
      )[0];

    useEffect(() => {
        fetch (fetch("http://localhost:5000/produtos",{
            method: "PUT",
            body: JSON.stringify({
                id: produtoRetornadoDoFiltro.id,
                nome: produtoRetornadoDoFiltro.nome,
                desc: produtoRetornadoDoFiltro.desc,
                preco: produtoRetornadoDoFiltro.preco,
                img: produtoRetornadoDoFiltro.img,
            })
        })

      }
    } 