class Traveler {
    constructor(name){
        this.name = name;
        this.isHealthy = true;
        this.food = 1
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food > 0){
            this.food = -1
            this.isHealthy = true
        }else{
            this.food = 0
            this.isHealthy = false            
        }
        
    }

}