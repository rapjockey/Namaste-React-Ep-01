
/* Creating A HTML Tag  Using React */
// const heading = React.createElement("h1",{id: "heading"},"Hello World From React!");

/* Creating A Nasted HTML Structure Using React */
// const parent = React.createElement("parent", {id:"parent"},
//      React.createElement("child",{id:"child"},React.createElement("h1", {}, "Hello I'm H1 Tag")
//      ))



/* Creating A Nasted Multiple HTML Tags Structure Using React */

const parent = React.createElement("div", {id: "parent"},
     React.createElement("div",{id:"child"}, 
        [
            React.createElement("h1",{},"I Am H1 Tag"),
            React.createElement("h2",{},"I Am H2 Tag")

        ]
     ));


/*Call The Root Element*/ 
const root = ReactDOM.createRoot(document.getElementById("root"));


/* React Render The ReactElemets Into HTML (Browser Readerable Form) */
root.render(parent);