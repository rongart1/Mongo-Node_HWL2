function init(){
    fetchData();
    console.log("init called");
}

function fetchData(){ //fetching data then calling render on it;
    fetch('http://fs1.co.il/bus/vip.php')
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

    const vipUsers = [];

    data.forEach(item => {
        const vipUser = new VipUser(item.name,item.worth,item.birth_year,item.source,item.country,item.image);
        vipUsers.push(vipUser);
    });

    vipUsers.forEach(user => {
        user.render();
    });
}

init();