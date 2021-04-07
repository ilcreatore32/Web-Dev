var template = document.createElement("template");

template.innerHTML = `

    <style>
    p, h4{
        padding: 0px 60px;
    }
    </style>
    <div class="glosary">

    </div>
`;

class glosaryComponent extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    findDbMain(data, Term) {
        const response = data.database.find((enter) => {
          if (enter.Term == Term) return true;
        });
    
        return response;
    }

    createMain(Term) {
        const term = document.createElement("h4");
    
        term.className = "termClass";
        term.innerHTML = Term;
        this.shadowRoot.querySelector(".glosary").appendChild(term);
    }

    createSubTitle(Description) {
        const description = document.createElement("p");

        description.innerHTML = Description;
        this.shadowRoot.querySelector(".glosary").appendChild(description);
    }

    connectedCallback(){
        fetch("./application/database/glosary.json")
            .then((data) => data.json())
            .then((data) => {
                const database = this.findDbMain(data, this.getAttribute("Term"));
                this.createMain(database.Term);
                this.createSubTitle(database.Description);
            });

    }
}

export {glosaryComponent};