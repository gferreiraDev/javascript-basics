// create a function that calculates the rated score af a student given
// an array of marks.
// Then return the corresponding grade according to the info below;
// 1-59 => F; 60-69 => D; 70-79 => C;  80-89 => B; 90-100 => A

const calculateGrade = (marks) => {
  const averageMark = Math.floor(marks.reduce((sum, mark) => sum += mark, 0) / marks.length);
  
  if (averageMark < 60) return 'F';
  else if (averageMark < 70) return 'D';
  else if (averageMark < 80) return 'C';
  else if (averageMark < 90) return 'B';
  else return 'A';
}


const marks = [80, 80, 50];
const marks1 = [55, 70, 68];

console.log(calculateGrade(marks));
console.log(calculateGrade(marks1));