function controlLight(){
    if(document.getElementById('switch').innerText == 'Turn On'){
        document.getElementsByClassName('light')[0].src = 'images/on.png';
        document.getElementById('switch').innerText = 'Turn Off';
        document.getElementById('switch').classList.add('turnOff');
        document.getElementById('switch').classList.remove('turnOn');
    }
    else{
        document.getElementsByClassName('light')[0].src = 'images/off.png';
        document.getElementById('switch').innerText = 'Turn On';
        document.getElementById('switch').classList.remove('turnOff');
        document.getElementById('switch').classList.add('turnOn');
    }
}