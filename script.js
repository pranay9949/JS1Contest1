const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i of data){
    if(i.profession=="developer"){
      console.log(i.name);
    }
  }
}

// 2. Add Data
function addData() {
  const Name=prompt("Enter a name");
  const Age=prompt("Enter a age");
  const Profession=prompt("Enter a profession");
  const newData={
    name:Name,
    age:Age,
    profession:Profession,
  }
  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i in data){
    if(data[i].profession=="admin"){
      data.splice(i,1);
    }
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr=[{name:"omkar",age:20,profession:"caller"}];
  const result=data.concat(arr);
  console.log(result);
  

}

// 5. Average Age
function averageAge() {
  let sum=0;
  for(let i in data){
    sum=sum+data[i].age;
  }
  let avg=sum/data.length;
  console.log(avg)
}

// 6. Age Check
function checkAgeAbove25() {
  let a=false;
  for(let i in data){

    if(data[i].age>25){
      a=true;
    }
    
  }
  if(a){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// 7. Unique Professions
function uniqueProfessions() {
     let arr=[];
      for(let i of data){
            if(!arr.includes(i.profession)){
              arr.push(i.profession);
            }
      }
      console.log(arr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i of data){
    if(
  data[i].name="john"){
    dats[i].profession="manager";
  }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count=0;
  for(let i of data){
    if(i.profession=="developer"||i.profession=="admin"){
      count++;
    }
  }
  console.log(count);
}
