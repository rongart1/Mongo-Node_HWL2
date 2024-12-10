class GameObj{
    constructor(name,genere,link){
        this.name = name;
        this.link = link;
        this.genere =genere;
    }

    render(){
        const element = document.createElement('div');
        
        const title = document.createElement('h1');
        title.innerHTML=this.name;
        
        const text = document.createElement('p');
        text.innerHTML=
        `ganre: ${this.genere}
        <br/>
        for more info 👉 <a href="${this.link}">press here</a>`;

        element.append(title,text);

        element.classList=['game_card'];

        document.getElementById('root').append(element);
    }
}