const LinksSocialMedia = {
    github: 'marcossouto0',
};

function haveLinkInObj(objName) {
    if (objName in LinksSocialMedia) {
        return true;
    } else {
        return false;
    }
}

function changeSocialmediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');

        if (haveLinkInObj(social)) {
            li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
        } else {
            li.children[0].target = "_self";
        }
    }
}

function dontOpenSocialMediaIfDontHaveLink(social) {
    if (!haveLinkInObj(social)) {
        alert('Meu perfil nessa rede é privado');

    }
}

changeSocialmediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('Name').innerHTML = data.name;
        document.getElementById('userBio').innerHTML = data.bio;
        github_link.href = data.html_url;
        github_username.textContent = data.login;
        avatar.src = data.avatar_url;
    })
}

getGitHubProfileInfos()