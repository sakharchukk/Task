  const PROJECT_PRICES = {
  	'landing' : 8888,
  	'site' : 9000,
  	'corporation' : 12000,
  	'promo' : 6999,
  	'shop' : 8500,
  	'service' : 10500
  };

  const DEFAULT_PROJECT_ID = 'landing';

  function populateProjectPrice() {
  	  const priceElement = document.getElementById('projectPrice');
  	  const projectId = extractProjectIdFromUrl();

  	  priceElement.innerHTML = PROJECT_PRICES[projectId];
  }

  function extractProjectIdFromUrl() {
  	return location.search.split('projectId=')[1] || DEFAULT_PROJECT_ID;
  }

  function showText() {
  	const input = document.getElementById('phone');
  	const phoneNumber = input && input.value;
    
    if (isPhoneNumberValid(phoneNumber)) {
    	alert ("Спасибо");
    } else {
    	alert("Номер телефона не валидный: " + phoneNumber);
    }
  }

  function isPhoneNumberValid(phoneNumber) {
  	const pattern = /^\+\d{2} \(\d{3}\) \d{3}-\d{4}$/;
  	return !!phoneNumber && !!phoneNumber.match(pattern); 
  }

  function formatPhone(input) {
  	const matched = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})/);
  	input.value = preparePhoneNumber(matched[1], matched[2], matched[3], matched[4]);
  }

  function preparePhoneNumber(countryPart, operatorPart, firstPhonePart, secondPhonePart) {
  	if (!operatorPart) {
  		return countryPart;
  	}

  	const formatted = '+' + countryPart + ' ';
  	if (!firstPhonePart) {
  		return formatted + operatorPart;
  	}

  	return formatted + '(' + operatorPart + ') ' + firstPhonePart + (secondPhonePart ? '-' + secondPhonePart : '');
  }