function init(){
    fetchData();
    console.log("init called");
}

function fetchData(){ //fetching data then calling render on it;
    fetch('http://fs1.co.il/bus/xbox1.php')
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log('data: ',data);
        renderData(data);
    })
    .catch(err => console.error(err))
}

function renderData(data){ //create users and uses the render function in them

    const games = [];

    data.forEach(game => {
        const gameObj = new GameObj(game.Game,game.Genre,game.GameLink);
        games.push(gameObj);
    });

    games.forEach(game => {
        game.render();
    });
}

init();