var template = document.createElement("template");

template.innerHTML = `
    <style>
    .enterDiv{
        background-color: #fff;
        color: black;
        padding: 20px;
        padding-bottom: 30px;
        margin-bottom: 20px;
        border-radius: 0.5rem;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
        margin: 30px;
      }
      p{
        text-align: justify;
        text-justify: auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 370;
        text-indent: 30px;
        padding: 0 30px;
      }
      h2{
          text-indent: 30px;
      }
      .subTitleClass{
          text-indent: 40px;
      }
    </style>
    <div class="enterDiv">
      <slot name="enterImg"/>
        <div class="h2"></div>
        <div class="p"></div>
        <slot name="glosary"></slot>
    </div>
`;

class enterComponent extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    findDbTitle(data, Title) {
        const response = data.database.find((enter) => {
          if (enter.Title == Title) return true;
        });
    
        return response;
    }
    
    createTitle(Title) {
        const title = document.createElement("h2");
    
        title.className = "titleClass";
        title.innerHTML = Title;
        this.shadowRoot.querySelector(".h2").appendChild(title);
    }

    createSubTitle(subTitle) {
        if (!subTitle) return;
        else {
            subTitle.forEach(element => {
                const subtitles = document.createElement("h4");

                subtitles.className = "subTitleClass";
                subtitles.innerHTML = element;
                this.shadowRoot.querySelector(".enterDiv").appendChild(subtitles);
            });
        }
    }

    createLinks(Links) {
        if (!Links) return;
        else {
            Links.forEach(element => {
                const links = document.createElement("p");

                links.className = "linkClass";
                links.innerHTML = element;
                this.shadowRoot.querySelector(".enterDiv").appendChild(links);
            });
        }
    }

    createContent(Content) {
        if (!Content) return;
        else {
            Content.forEach(element => {
                const content = document.createElement("p");

                content.className = "contentClass";
                content.innerHTML = element;
                this.shadowRoot.querySelector(".p").appendChild(content);
            });
        }
        
    }

    connectedCallback(){
        fetch("./application/database/database.json")
            .then((data) => data.json())
            .then((data) => {
                const database = this.findDbTitle(data, this.getAttribute("Title"));
                this.createTitle(database.Title);
                this.createContent(database.Contents);
                this.createSubTitle(database.SubTitles);
                this.createLinks(database.Links);
            });

    }
}

export {enterComponent};