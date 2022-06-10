class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passageiros = []

    }
    getAvailableSeatCount(){
        let totalCapacity = this.capacity - this.passageiros.length
        return totalCapacity
        
    }
    join(traveler){
        if(this.capacity > this.passageiros.length){
            this.passageiros.push(traveler)
        }
    }
    shouldQuarantine(){
        for(let i=0; i<this.passageiros.length;i++){
            if(this.passageiros[i].isHealthy == false){            
                return true
        }
    }
    }

    totalFood(){
        let totalFood = 0
        for(let i = 0; i < this.passageiros.length; i++){            
           return totalFood += this.passageiros[i].food
    }
}
}
