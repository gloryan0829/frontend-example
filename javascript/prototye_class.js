function Animal(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
    this.say = () => {
        console.log(this.sound)
    }
}

Animal.prototype.getName = function() {
    console.log(this.name)
}

const dog = new Animal(`개`,`멍멍이`,`멍멍`)

const cat = new Animal(`고양이`,`야옹`,`야옹이`)

console.log(dog)

cat.say()

cat.getName()