class footerComponent extends HTMLElement{

    constructor(){
        super();

    }

    connectedCallback(){
        this.innerHTML = `
        <style>
            #foot a{
                margin: 2em;
            }
            
            .page-foot{
                float: left;
                width: 100%;
                text-align: center;
                color: #ccc;
                font-size: 16px;
                background-color: rgb(39, 39, 39);
                margin-top: 20px;
                padding: 20px;
                height: auto;
            }
            
            #foo{
                text-align: center;
                border-top: 1px solid #ccc;
            }
        </style>
        <div id="foot">
            <footer class="page-foot">
                <div class="container">
                    <a href="https://www.facebook.com/iujocatia/"><img class="img-b" src="./application/assets/icons/facebook.png" width="32px" alt="facebook"></a>
                    <a href="https://www.instagram.com/iujocatia/?hl=es-la"><img class="img-b" src="./application/assets/icons/instagram.png" width="32px" alt="instagram"></a>
                    <p id="foo" class="border-bottom">Copyright © All rights reserved to I.U.J.O</p>
                </div>
            </footer>
        </div>
        `;
    }
}

export {footerComponent};