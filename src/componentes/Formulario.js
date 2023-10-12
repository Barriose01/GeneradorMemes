import React from "react";

function Formulario(){

    let [meme,setMeme] = React.useState({
        textoSuperior: "",
        textoInferior: "",
        imagenURL: "https://i.imgflip.com/26jxvz.jpg"
    });

    let [infoMemes,setInfoMemes] = React.useState();
    let nombreMeme = "";

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(datosMeme => setInfoMemes(datosMeme.data.memes));
    },[])

    function memeAleatorio(){
        let posicionMeme = Math.floor(Math.random() * (infoMemes.length - 0 + 1)) + 0;
        return infoMemes[posicionMeme];
    }
    
    function devolverImagen(evento){
        evento.preventDefault();
        let objetoMeme = memeAleatorio();
        nombreMeme = objetoMeme.name;
        setMeme((memeAnterior)=>{
            return {
                ...memeAnterior,
                imagenURL: objetoMeme.url
            }
        })
    }
    function modificarTexto(evento){
        setMeme((memeAnterior)=>{
            return {
                ...memeAnterior,
                [evento.target.name]:evento.target.value.toUpperCase(),
            }
        })
    }
    return (
        <form className="Formulario" onSubmit={devolverImagen}>
            <div className="TextBoxes">
                <input name ="textoSuperior" className="PrimerTexto Input" type="text" placeholder="Ingrese el texto superior" value={meme.textoSuperior} onChange={modificarTexto}></input>
                <input name="textoInferior" className="SegundoTexto Input" type="text" placeholder="Ingrese el texto inferior" value={meme.textoInferior} onChange={modificarTexto}></input>
            </div>

            
            <button className="Boton">Genera un nuevo meme 🖼️</button>
            <div className="ImagenMeme">
               
                <div className="ContenidoImagenMeme">
                    <img className="Imagen" src={meme.imagenURL} alt={nombreMeme}></img>
                    {meme.textoSuperior && <div  className="TextoSuperior">{meme.textoSuperior}</div>}
                    {meme.textoInferior && <div  className="TextoInferior">{meme.textoInferior}</div>}
                </div>
                
               
            </div>
        </form>
        
    )
}
export default Formulario