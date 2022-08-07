function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height * height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    grauImc = document.querySelector('#grau-imc');
    
    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);
    
    var imc = calculateImc(weight, height);
    
    var formattedImc = imc.toFixed(2).replace('.', ','); 
    imcResult.textContent = formattedImc;
    var grauImc = Number(formattedImc);
    
    if (grauImc >= 16 && grauImc < 17); {
        'Muito abaixo do peso.'
    }
    else if (grauImc >= 17 && grauImc < 18.5); {
        'Abaixo do peso.'
    }
    else if (grauImc >= 18.5 && grauImc < 25); {
        'Peso normal.'
    }
    else if (grauImc >= 25 && grauImc < 30); {
        'Acima do peso.'
    }
    else if (grauImc >= 30 && grauImc < 35); {
        'Obesidade grau I.'
    }
    else if (grauImc >= 35 && grauImc <= 40); {
        'Obesidade grau II.'
    }
    else if (grauImc > 40); {
        'Obesidade grau.'
    } else {
        'Inválido.'
    }
    
}

start();