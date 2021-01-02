const salaryOperations = { 
    basicSalary:0.0, inputSalary(basicSalary){
        this.basicSalary = basicSalary;
    },
    hra(){
        return 0.30*this.basicSalary;
    },
    da(){
        return 0.60*this.basicSalary;
    },
    totsal(){
        return this.basicSalary + this.hra() + this.da();
    },
    tax(){
        return this.basicSalary
    }
}

