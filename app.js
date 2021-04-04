// chap 72 Object Constructors
// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// var student1=new Student("Qdeer",1)
// var student2=new Student("Qdeer",2)
// var student3=new Student("Qdeer",3)
// var student4=new Student("Qdeer",4)

// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)


// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
//     this.getName=function(){
//         return this.name;
//     }
// }
// var student1=new Student("Qdeer",1)
// console.log(student1.getName())


// // chap 74 Objects Prototypes
// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// // Student.prototype.getName=function(){
// //     return this.name
// // }

// // Addition on object throgh prototype
// var student1=new Student("Qdeer",1)
// Student.prototype.school='xyz'
// console.log(student1)


// chap 75 Checking for properties and methods
// var student2={
//     name:"Qadeer",
//     roll:110
// }
// console.log("roll" in student2)
// OR 
// console.log(student2.hasOwnProperty("roll"))


// var student2={
//     name:"Qadeer",
//     roll:110,
//     school:"ABC"
// }
// for(var p in student2){
//     console.log(p)
// }
// for(var p in student2){
//     console.log(student2[p])
// }
// for(var p in student2){
//     console.log(p,student2[p])
// }








// =========FIREBASE======= 

// function saveData(){
//     var name=document.getElementById("name")
//     var roll=document.getElementById("roll")

//     var student={
//         name:name.value,
//         roll:roll.value
//     }
//     // firebase.database().ref('student').set(student)
//     // firebase.database().ref('student').child('Student1').set(student)
//     // firebase.database().ref('student/Student1').set(student)

//     // Use push Keyword for collection of multiple data =====Firebase khud ek unique key bnata hai jis mai data save karta hai
//     firebase.database().ref('student').push(student)

// }

function saveData(){
    var name=document.getElementById("name")
    var roll=document.getElementById("roll")

    var student={
        name:name.value,
        roll:roll.value
    }

    // is se randomly key bany gi
    // var key=Math.random()* 12345;
    firebase.database().ref('student/' + key.toFixed()).set(student)

    // // ager hum chahy ky firebase humy key bna ky dy
    // var key=firebase.database().ref('student').push().key 
    // console.log(key)
}

// Ager hum chahy ky key bhi hamry object mai a jaye
function saveData(){
    var name=document.getElementById("name")
    var roll=document.getElementById("roll")
  
    var key=firebase.database().ref('student').push().key 
    var student={
        name:name.value,
        roll:roll.value,
        key:key
    }
    firebase.database().ref('student/' + key).set(student)

}


// // ab ager hum firebase ky database se data lena chahy to .once() ka method use hoga====once()====is mai value ek fixed keyword hai
// // jo refference hum ne set karty howy bnaya tha wahi get karty howy bhi bnayen gy
// function getFireBaseData(){
//     firebase.database().ref('student').once('value',function(data){
//         console.log(data.val())
//         // .val() ka method hamy proper formate mai data dy ga 
//     })
// }
// getFireBaseData()


// //once ki tarha ek or method hai .on()====is mai value ki jaga child_added ka keyword use hota hai====is ka mtlab jab bhi hamary firebase data base mai jab bhi child add ho to mujhy data la kar dyde 
// //on ka method real time chalta hai ==matlab jab jab firebase mai koi change aye ga ye data la ky dedy ga
// //is ky ilawa =====child_delete()=====child_change()===bhi hai
// function getFireBaseData(){
//     firebase.database().ref('student').on('child_added',function(data){
//         console.log(data.val())
//         // .val() ka method hamy proper formate mai data dy ga 
//     })
// }
// getFireBaseData()


// //firebase se data remove karna
// function removeFirebaseData(){
//     // ye student ka pora object delete kar dy ga 
//     firebase.database().ref('student').remove()

//     // // or ye perticular ek key ko delete kar dega 
//     // firebase.database().ref('student/-MXCxwpOGDLqmfjZS1c5').remove()
// }
// removeFirebaseData()



// data ko EDIT kesy karna hai 
function editFirebaseData(){
    firebase.database().ref('student/-MXD07re98y550mju0hN').set({
        key:'-MXD07re98y550mju0hN',
        name:'Hussain',
        roll:'14'
    })
}
editFirebaseData()
