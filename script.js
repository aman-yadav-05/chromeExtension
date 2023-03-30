fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokesData => {
        const text = jokesData.attachments[0].text;
        const jokeElem = document.getElementById('jokeElem');
        jokeElem.innerHTML = text;
    })
