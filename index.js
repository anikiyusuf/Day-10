function mergeArray(arr1,arr2,n1,n2,arr3){
    var i=0,j=0,k=0;
    while(i<n1 && j<n2){
        if(arr1[i]<arr2[j]){
            arr3[k]=arr1[i];
            i++;
        }
        else{
            arr3[k]=arr2[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        arr3[k]=arr1[i];
        i++;
        k++;
    }
    while(j<n2){
        arr3[k]=arr2[j];
        j++;
        k++;
    }
}

var arr1=[1,3,5,7,9];
var n1 = arr1.length;
var arr2=[2,4,6,8,10];
var n2 = arr2.length;
var arr3=Array(n1 + n2).fill(0);

mergeArray(arr1,arr2,n1,n2,arr3);
for(i = 0; i < n1 + n2; i++){
    console.log(arr3[i]);
}