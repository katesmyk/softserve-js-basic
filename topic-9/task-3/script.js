// Знайдіть теги <div>, які стоять безпосередньо після <h3> і 
// перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

let h3 = $('h3');
let div = $('div');
// for(let i = 0; i < h3.length; i++){
// 	h3.eq(i).before(div.eq(i));
// }

for(let i in h3){
	h3.eq(i).before(div.eq(i));
}
