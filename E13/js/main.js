$(document).ready(function() {
	signGuess();
	$('#guess').keydown(function(event){    
    if(event.keyCode==13){
       $('#submit').trigger('click');
    	}
	});
});

function signGuess() {
	var signArray = ["Aries","Taurus","Gemini",
					 "Cancer","Leo","Virgo",
					 "Libra","Scorpio","Sagittarius",
					 "Capricorn","Aquarius","Pisces"];
	var sign = Math.floor(Math.random() * signArray.length);
	var stripped = signArray[sign].toLowerCase();
	console.log(signArray[sign]);
	console.log(stripped);
	$('#submit').click(function() {
		var guess = $('input').val();
		if (guess == 'pisces' || guess == 'Pisces'){
			$('#imgcont').toggleClass('.pi');
		}
		else if (guess == 'aquarius' || guess == 'Aquarius'){
			$('#imgcont').toggleClass('.aq');
		}
		else if (guess == 'capricorn' || guess == 'Capricorn'){
			$('#imgcont').toggleClass('.ca');
		}
		else if (guess == 'sagittarius' || guess == 'Sagittarius'){
			$('#imgcont').toggleClass('.sa');
		}
		else if (guess == 'scorpio' || guess == 'Scorpio'){
			$('#imgcont').toggleClass('.sc');
		}
		else if (guess == 'libra' || guess == 'Libra'){
			$('#imgcont').toggleClass('.li');
		}
		else if (guess == 'virgo' || guess == 'Virgo'){
			$('#imgcont').toggleClass('.vi');
		}
		else if (guess == 'leo' || guess == 'Leo'){
			$('#imgcont').toggleClass('.le');
		}
		else if (guess == 'cancer' || guess == 'Cancer'){
			$('#imgcont').toggleClass('.cn');
		}
		else if (guess == 'gemini' || guess == 'Gemini'){
			$('#imgcont').toggleClass('.ge');
		}
		else if (guess == 'taurus' || guess == 'Taurus'){
			$('#imgcont').toggleClass('.ta');
		}
		else if (guess == 'aries' || guess == 'Aries'){
			$('#imgcont').toggleClass('.ar');
		}
		console.log(guess);
		if (guess == stripped || guess == signArray[sign]) {
			$('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
		}else {
			$('h1').text(guess+' is wrong.');
			$('input').val('');
		}
	});
}