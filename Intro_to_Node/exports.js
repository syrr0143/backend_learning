export function linearsearch  (Array , target) {
    for (let i = 0; i < Array.length; i++){
        if (Array[i] == target) {
            console.log('element is present in array')
            return i;
        }
    }
    console.log('element is not present in array')
    return -1;
}
