/** 
 * 
 * Criar um componente if teste recebendo uma expressão,
 * essa expressão poderá ser verdadeira ou falsa
 * se for verdade exibe um conteudo se for falsa não exibe
 * 
*/

export default props => {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}