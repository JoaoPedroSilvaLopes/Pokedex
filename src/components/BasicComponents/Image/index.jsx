export function Image({caminho, width, height}) {
    if (caminho === undefined) {
        return ''
    } 
    return <img src={caminho} width={width} height={height}></img>
}