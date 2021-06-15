const If = (props) => {
    // console.log("props ---> ", props); // {condition: true}
    if (props.condition) {
        return props.children
    } else {
        return null;
    }
    // return props.codition ? props.children : null;
}
export default If;