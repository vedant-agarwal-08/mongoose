const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitssDB",{useNewUrlParser:true});
const fruitSchema=new mongoose.Schema({
    // name:String,
    name:{
        type:String,
        require:[true,"please check your data entry,no name specified"]
    },
    // rating:Number,
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit"
});
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
});
const Person=mongoose.model("Person",personSchema);
const pineapple=new Fruit({
    name:"Pineapple",
    rating:9,
    review:"Great fruit"
});
pineapple.save();
const person=new Person({
    name:"Vedant",
    age:20,
    favouriteFruit:pineapple
});
person.save();

const kiwi=new Fruit({
    name:"kiwi",
    score:10,
    review:"best fruit"
})

const orange=new Fruit({
    name:"Orange",
    score:4,
    review:"Too sour"
});
const banana=new Fruit({
    name:"banana",
    score:3,
    review:"bad texture"
});
Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log(err);
    }else{
         console.log("successfully saved all the fruits to fruitsdb")
    }
})
Fruit.find(function(err,fruits){
    if(err){
        console.log(err)
    }else{

    mongoose.connection.close();
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
    }
});
Fruit.updateOne({_id:"63e7b43a10c03717644e6bcf"},{name:"peach"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("successfully updated");
    }
});
fruit.save()

Fruit.deleteOne({name:"Apple"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("successfully deleted");
    }
})

Person.deleteMany({name:"John"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("succesfully deleted");
    }
})