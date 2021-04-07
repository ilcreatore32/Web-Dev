class navComponent extends HTMLElement{

    constructor(){
        super();

    }

    connectedCallback(){
        this.innerHTML = `
        <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* body{
        min-height: 100vh;
        background: #fff;
    } */

    .navigation{
        position: fixed;
        width: 60px;
        height: 100%;
        background: #15153a;
        transition: 0.7s;
        z-index: 100;
        overflow: hidden;
    }

    .navigation:hover{
        width: 300px;
    }

    .navigation ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .navigation ul li{
        position: relative;
        width: 100%;
        margin: 10px 0;
        list-style: none;
        background: #181843;
    }

    .navigation ul li:hover{
        background: #f416467c;
    }

    .navigation ul li a{
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #fff;
    }

    .navigation ul li a .icon{
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: rgba(0,0,0,0)
    }

    .navigation ul li a .icon img{
        width: 30px;
        vertical-align: middle;
    }

    .navigation ul li a .title{
        position: relative;
        display: block;
        padding: 0 10px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: start;
        white-space: nowrap;
        background: rgba(0,0,0,0);
        border-left: 1px solid #00ff99d5;
    }
</style>

<div class="navigation">
<ul>
    <li>
        <a href="../../../index.html">
            <div class="icon">
                <img src="./application/assets/icons/home.png" alt="home">
            </div>
            <span class="title">Inicio</span>
        </a>
    </li>
    <li>
        <a href="#index">
            <div class="icon">
                <img src="./application/assets/icons/list.png" alt="list">
            </div>
            <span class="title">Índice de Temas</span>
        </a>
    </li>
    <li>
        <a href="#glosary">
            <div class="icon">
                <img src="./application/assets/icons/glosary.png" alt="glosary">
            </div>
            <span class="title">Glosario de Términos</span>
        </a>
    </li>
    <li>
        <a href="#help">
            <div class="icon">
                <img src="./application/assets/icons/help.png" alt="help">
            </div>
            <span class="title">Sección de Ayuda</span>
        </a>
    </li>
    <li>
        <a href="#author">
            <div class="icon">
                <img src="./application/assets/icons/author.png" alt="author">
            </div>
            <span class="title">Apartado del Autor</span>
        </a>
    </li>
</ul>
</div>
        `;
    }
}

export {navComponent};
