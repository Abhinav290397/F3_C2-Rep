function getMenu() {
  return new Promise((res, rej) => {
    fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        res(data);
      })
      .catch((error) => {
        console.log(error);
        rej(error);
      });
  });
}
let order = {};
function takeOrder(menu){
    return new Promise((res,rej) => {
        setTimeout(() => {
            for(let i=0;i<3;i++){
                let randomIndex = Math.floor(Math.random*menu.length);
                let randomItem = menu[randomIndex];
                order[randomItem.name] = randomItem; 
            }
        },2500);
    });
}