class __cardNews extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open" })
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const card__left = document.createElement("div");
    card__left.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    card__left.appendChild(autor);
    card__left.appendChild(linkTitle);
    card__left.appendChild(newsContent);

    const card__right = document.createElement("div");
    card__right.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/fotoPadrao.png";
    newsImage.alt = "Foto da notícia";
    card__right.appendChild(newsImage);

    componentRoot.appendChild(card__left);
    componentRoot.appendChild(card__right);

    return componentRoot;
  }

  style(){
    const style = document.createElement("style");
    style.textContent = `.
    card{
      width: 80%;
      display: flex;
      flex-direction: row;
      box-shadow: 8px 12px 25px -14px rgba(0,0,0,0.75);
    -webkit-box-shadow: 8px 12px 25px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 8px 12px 25px -14px rgba(0,0,0,0.75);
    justify-content: space-between;
    }
    
    .card__left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span{
      font-weight: 400;
    }
    
    .card__left > a {
      margin-top: 15px;
      font-size: 25px;
      color: #303030;
      text-decoration: none;
      cursor: pointer;
    }
    
    .card__left > p{
      color: gray;
    }
    
    .card__right > img{
      height: 100px;
    }
    `;
    return style;
  }
}

customElements.define("card-news", __cardNews)