function checkAnswer1(answer1) {
    const result = document.getElementById('result1');
    if (answer1 === 'a') {
    result.textContent = "ถูกต้อง! PIM ย่อมาจาก PIM";
    result.style.color = 'lightgreen';
    document.querySelector('#h41').innerText = "คำถามที่ 1 ถูกต้อง ได้ 1 คะแนน!";
    } else {
    result.textContent = "ผิด! ลองตอบอีกที";
    result.style.color = 'white';
    document.querySelector('#h41').innerText = "คำถามที่ 1 ยังไม่มีคะแนน";
    }
    }

function checkAnswer2(answer2) {
    const result = document.getElementById('result2');
    if (answer2 === 'd') {
    result.textContent = "ถูกต้อง! Gosoft คือมูลนิธิที่ไม่แสวงหาผลกำไร!";
    result.style.color = 'lightgreen';
    document.querySelector('#h42').innerText = "คำถามที่ 2 ถูกต้อง ได้ 1 คะแนน!";
    } else {
    result.textContent = "ผิด! โลกสวยเกินไปแล้ว!";
    result.style.color = 'white';
    document.querySelector('#h42').innerText = "คำถามที่ 2 ยังไม่มีคะแนน";
    }
    }
