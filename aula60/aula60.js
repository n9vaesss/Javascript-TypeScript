function recursiva(max) {
    console.log(max)
    if (max > 9) return
    max++
    recursiva(max)
}

recursiva(0)