var template = document.createElement("template");

template.innerHTML = `
    <slot name="index">
        <ul class="index-sub">
            <li class="index-title"></li>
        </ul>
    </slot>
`;

class indexComponent extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    findDbMain(data, Main) {
        const response = data.database.find((enter) => {
          if (enter.Main == Main) return true;
        });
    
        return response;
    }

    createMain(Main) {
        const main = document.createElement("h3");
    
        main.className = "mainClass";
        main.innerHTML = Main;
        this.shadowRoot.querySelector(".index-title").appendChild(main);
    }

    createSubTitle(subTitle) {
        if (!subTitle) return;
        else {
            subTitle.forEach(element => {
                const subtitles = document.createElement("a");
                const br = document.createElement("br");

                subtitles.href = "";
                subtitles.innerHTML = element;
                this.shadowRoot.querySelector(".index-sub").appendChild(subtitles);
                this.shadowRoot.querySelector(".index-sub").appendChild(br);
            });
        }
    }

    connectedCallback(){
        fetch("./application/database/index.json")
            .then((data) => data.json())
            .then((data) => {
                const database = this.findDbMain(data, this.getAttribute("Main"));
                this.createMain(database.Main);
                this.createSubTitle(database.SubTitles);
            });

    }
}

export {indexComponent};
