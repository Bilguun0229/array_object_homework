triangular1={a:10, b:10, c:10}
triangular2={a:4, b:4, c:4}
// <!-- Дасгал 1 s=(a+b+c) / 2 Area=√s(s−a)(s−b)(s−c -->

s1=(triangular1.a+triangular1.b+triangular1.c)/2;
s2=(triangular2.a+triangular2.b+triangular2.c)/2;
area1=Math.sqrt(s1*(s1-triangular1.a)*(s1-triangular1.b)*(s1-triangular1.c))
area2=Math.sqrt(s2*(s2-triangular2.a)*(s2-triangular2.b)*(s2-triangular2.c))
if(area1<area2){
area.textContent=("Хоёрдугаар гурвалжингийн талбай нь " +area2+ " бөгөөд 1-р дугаар гурвалжингийн талбайнаас их байна");
}else {
  area.textContent=("Нэгдүгээр гурвалжингийн талбай нь " +area1+ " бөгөөд 2-р дугаар гурвалжингийн талбайнаас их байна");
}


var person = {
    firstName: "Төртулга",
    lastName: "Очирбат",
    age: 23,
    address: {
      country: "Монгол",
      city: "Улаанбаатар",
      district: "Сүхбаатар",
      subDistrict: 15,
      street: "Залуучууд",
      houseNumber:123,
      floor:4,
      room:27
    },
    gender: "эр"
  }
  function printItem() {
 document.querySelector(".td").textContent=person.lastName + " овогтой " + person.firstName +" нь "+person.age+ " настай " +person.gender+ " бөгөөд "+person.address.country +" Улс "+person.address.city+ " Хот "+person.address.district+" Дүүрэг " +person.address.subDistrict+" Хороо " +person.address.  street+ "ын гудамж " + person.address.houseNumber+" байрны "+ person.address.floor+" давхарын "+ person.address.room+" тоотод оршин суудаг "
}
printItem();
//   document.querySelector(".td").textContent=person[ lastName "овогтой" firstName "нь" age "настай" gender "бөгөөд" district+street+houseNumber+floor+room +"дээр амьдардаг болно".]
// Хүснэгтийн дурын байрлал дээрхи утгыг устгах
// array=["Төртулга", "Очирбат", "23", "Монгол", "Улаанбаатар", "Сүхбаатар", "15", "Залуучууд", "123", "4","27", "эр"]
btn.addEventListener('click', function(){
 const array=["Төртулга", "Очирбат", "23", "Монгол", "Улаанбаатар", "Сүхбаатар", "15", "Залуучууд", "123", "4","27", "эр"];
//  const newArray=array.splice(Number(input.value), 1);
// printtest.textContent=array;
// delete array[Number(input.value)]
// const newArray=[];
// x=array.length
// for(i=Number(input.value)+1; i<x; i++){
//  newArray.push(array.pop());
// }
// array.pop();
// y=newArray.length
// for(i=0; i<y;i++){
// array.push(newArray.pop());
// }
// for(i=Number(input.value)+1; i<x; i++){
//   newArray.unshift(array.pop());
  
// }
// array.pop();


// console.log(newArray);
// console.log(array)
// printtest.textContent=array.concat(newArray); 
newArray=array.slice(0,Number(input.value));
secondArray=array.slice(Number(input.value)+1, array.length);
printtest.textContent=newArray.concat(secondArray);
})
btn1.addEventListener('click', function(){
  const array=["Төртулга", "Очирбат", "23", "Монгол", "Улаанбаатар", "Сүхбаатар", "15", "Залуучууд", "123", "4","27", "эр"];
  indexAdd=Number(number.value);
  valueAdd=text.value;
  countArray=array.length
  newArray=[];
  // for(i=indexAdd; i<countArray; ++i){
  //   newArray.unshift(array.pop());
  //   console.log(newArray);
  // }
  // array.push(valueAdd);
  // additem.textContent=array.concat(newArray);
  // slice
  // newArray=array.slice(0,indexAdd);
  // secondArray=array.slice(indexAdd, countArray);
  // secondArray.unshift(valueAdd);
  // additem.textContent=newArray.concat(secondArray);
  // splice
  array.splice(indexAdd,0,valueAdd)
  additem.textContent=array;
})
// Дасгал 5 үг санамсаргүй байдлаар
const ner=["Билгүүн ", "Амарсайхан ", "Бат ", "Дорж ", "Дулмаа "];
  const city=["Дархан ","Хөвсгөл ","Эрдэнэт ","Төв ","Архангай "];
  const array=["Хоол хийж байна. ","Хувцас угааж байна.","Шоудаж байна.","Хөгжим тоглож байна.","Ажилаар явж байна."];
btn5.addEventListener("click", function(){
    console.log(ner[0]+" "+ city[0] + array[2]);
    nerIndex=Math.floor(Math.random()*ner.length);
    cityIndex=Math.floor(Math.random()*city.length);
    arrayIndex=Math.floor(Math.random()*array.length);
    random.textContent=ner[nerIndex]+city[cityIndex]+array[arrayIndex];
})
// Дасгал6
// Функц ажиллана санамсаргүйгээр үг гаргана англи үгийг h2 дээр монгол үгийг h3 үгийг тавина.
wordIndex=0;
word = function (){
wordIndex=Math.floor(Math.random()*words.length);
  enlanguage.textContent=words[wordIndex].en;
  mnlanguage.textContent=words[wordIndex].mn;
}
word();
//  Тухайн үгийг МЭДНЭ дарна оноо нэмэгдэнэ дахиж гарж ирэхгүй хасагдана.
btn6.addEventListener("click", function(){
words.splice(wordIndex,1);

if(words.length==0){
enlanguage.textContent="game over "
mnlanguage.textContent=""
}else{
word();
count.textContent++;
}
})
// Тухайн үгийг МЭДЭХГҮЙ дараачийн үг гарж ирнэ оноо хасагдана 0 хүртэл хасагдана үг гарах процесс харагдана.

btn7.addEventListener("click", function(){
  if(count.textContent==0){
count.textContent=0;
}else{
  count.textContent--;
}
word();
console.log(typeof count)
})
