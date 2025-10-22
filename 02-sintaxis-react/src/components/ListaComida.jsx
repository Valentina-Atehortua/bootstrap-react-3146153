export function ListaComida({image, comidaName, description}){
    return(
        <>
        <h1>{comidaName}</h1>
        <img src={image} alt="" width="150" />
        <small>{description}</small>
        </>
    )
}