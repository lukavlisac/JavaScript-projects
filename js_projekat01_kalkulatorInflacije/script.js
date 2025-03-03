function inflationCalculator()
{
	let inflationRate = parseFloat(document.querySelector('#inflationRate').value);
	let money = parseFloat(document.querySelector('#money').value);
	let years = parseFloat(document.querySelector('#years').value);

	//formula inflacije za 1 godinu.
	let worth = money + (money * (inflationRate / 100));

	console.log(worth);

	for(let i = 1; i < years; i++)
	{
		worth += worth * (inflationRate/100)
	}

	worth = worth.toFixed(2);

	console.log(worth);

	let newElement = document.createElement('div');
	newElement.className = 'new-value';
	newElement.innerText = `Sa stopom inflacije od ${inflationRate} % današnjih ${money} evra,
	biće vredno isto kao ${worth} evra za ${years} god.`;

	if(document.querySelector('.container').querySelector('.new-value'))
	{
		window.location.reload();
		window.alert('Unesite ponovo podatke za novu kalkulaciju.');
	}
	else
	{
		document.querySelector('.container').appendChild(newElement);
	}
	
}