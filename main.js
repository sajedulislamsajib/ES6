function show(...numbers){
    let sum = 0;
    for (let i of numbers)
    {
        sum+=i;
    }
    console.log(sum);
}
show(1,2,3,4,5,6,7,8,9)