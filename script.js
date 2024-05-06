function checkAnswer1(answer1) {
    const result = document.getElementById('result1');
    if (answer1 === 'a') {
    result.textContent = "ถูกต้อง! PIM ย่อมาจาก PIM";
    result.style.color = 'darkgreen';
    } else {
    result.textContent = "ผิด! ลองตอบอีกที";
    result.style.color = 'darkred';
    }
    return answer1;
    }

function checkAnswer2(answer2) {
    const result = document.getElementById('result2');
    if (answer2 === 'd') {
    result.textContent = "ถูกต้อง! Gosoft คือมูลนิธิที่ไม่แสวงหาผลกำไร!";
    result.style.color = 'darkgreen';
    } else {
    result.textContent = "ผิด! โลกสวยเกินไปแล้ว";
    result.style.color = 'darkred';
    }
    return answer2;
    }

let point = answer1 + answer2;

function totalScore(point) {
    if (point === 'ad') {
    alert('เกย์วิปลาส');
    } else {
    alert('โบ้งหัวแร้ง');   
    }
}