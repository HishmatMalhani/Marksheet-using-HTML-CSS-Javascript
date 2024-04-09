
// function check(){
//     subject1 = parseInt(document.getElementById('subject1').value);
//     let len = subject1.length;
//     alert(len);
//     if(len > 2){
//         alert('limit reached');
//     }
// }

function showResults() {
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'flex';
  
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.style.display = 'block';
  }
  
  function calculateTotalMarks() {
    const subject1 = parseInt(document.getElementById('subject1').value) || 0;
    const subject2 = parseInt(document.getElementById('subject2').value) || 0;
    const subject3 = parseInt(document.getElementById('subject3').value) || 0;
    const subject4 = parseInt(document.getElementById('subject4').value) || 0;
    const subject5 = parseInt(document.getElementById('subject5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    document.getElementById('total-marks').textContent = totalMarks;
  }
  
  
  function calculatePercentage() {
    const totalMarks = parseInt(document.getElementById('total-marks').textContent);
    const percentage = ((totalMarks / 500) * 100).toFixed(4);
    document.getElementById('percentage').textContent = percentage;
  }
  
  function calculateGrade() {
    const percentage = parseFloat(document.getElementById('percentage').textContent);
    let grade;
  
  
    if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 50) {
      grade = 'D';
    } else {
      grade = 'Failed';
    }
  
    document.getElementById('grade').textContent = grade;
  }
  
  function resetInputs() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach((input) => (input.value = ''));
  
    document.getElementById('total-marks').textContent = '';
    document.getElementById('percentage').textContent = '';
    document.getElementById('grade').textContent = '';
  
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'none';
  
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.style.display = 'none';
  }
  