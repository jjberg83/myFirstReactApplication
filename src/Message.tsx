// .ts for plain Typescript files
// .tsx for React components

// 2 måter å lage en React component:
// - JavaScript class (gamlemmåten å gjøre det på)
// - JavaScript function (mest populære fordi de er kortere)

// Konvensjon å bruke PascalCasing
function Message() {
    // Det som ligner på HTML under er ikke HTML, men JSX (JavaScript XML)
    // Under the hood blir det konvertert til JavaScript 
    // Kan se det på babeljs.io/repl
    const name = '';
    if (name) // Har å gjøre med truth-ing
        return <h1>Hello {name}!</h1>;
    return <h1>Hello world!</h1>;
}

export default Message;