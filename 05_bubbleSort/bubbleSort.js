// i를 선언하여, 테스트를 원활하게 할 수 있습니다.
let i;

// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!

const bubbleSort = function(array) {
  // TODO: Your code here!
  for(let i=0;i<array.length;i++){
    if(array[i]>array[i+1]){
      let temp=array[i];
      array[i]=array[i+1];
      array[i+1]=temp;
      bubbleSort(array);
    }
  }
  return array;
};
