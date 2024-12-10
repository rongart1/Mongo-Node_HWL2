class VipUser{
    constructor(name,worth,birthYear,source,country,image){
        this.name = name;
        this.birthYear = birthYear;
        this.source = source;
        this.country = country;
        this.image = image;
        this.worth =worth;
    }

    render(){
        const element = document.createElement('div');
        
        const title = document.createElement('h1');
        title.innerHTML=this.name;
        const info = document.createElement('ul');
        let items=[
        `worth: ${this.worth}`,
        `birth year: ${this.birthYear}`,
        `company: ${this.source}`,
        `coutry: ${this.country}`
        ];

        items = items.map(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            return li;
        });

        info.append(...items);

        const image = document.createElement('img');
        image.src=this.image;

        element.append(title,info,image);

        element.classList=['vip_card'];

        document.getElementById('root').append(element);
    }
}