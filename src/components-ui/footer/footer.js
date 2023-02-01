import './footer.scss';

function createFooter() {
    const footer = document.createElement('footer');

    const divGroup1 = document.createElement('div');
    divGroup1.classList.add('footer-group');

    const firstP = document.createElement('p');
    firstP.textContent = 'A project based on';
    
    const innerDivGroup1 = document.createElement('div');
    innerDivGroup1.classList.add('odin-group');

    const odinLink = document.createElement('a');
    odinLink.href = 'https://www.theodinproject.com/home';
    odinLink.target = '_blank';

    const odinImg = document.createElement('img');
    odinImg.classList.add('odin-logo');
    odinImg.src = 'https://gist.githubusercontent.com/paulauskas-linas/8e086442e1a6223caef4792dbfce1288/raw/632a7a2f673b74238e8f95614d5ac365e8638b9f/odin.svg';
    odinImg.alt = 'logo of odin project';

    const secondP = document.createElement('p');
    secondP.classList.add('odin-text');
    const odinLink2 = document.createElement('a');
    odinLink2.href = 'https://www.theodinproject.com/home';
    odinLink2.target = '_blank';
    odinLink2.textContent = 'The Odin Project';
    odinLink2.target = '_blank';

    const thirdP = document.createElement('p');
    thirdP.textContent = 'course';

    secondP.appendChild(odinLink2);
    odinLink.appendChild(odinImg);
    innerDivGroup1.appendChild(odinLink);
    innerDivGroup1.appendChild(secondP);
    innerDivGroup1.appendChild(thirdP);
    divGroup1.appendChild(firstP);
    divGroup1.appendChild(innerDivGroup1);

    const divGroup2 = document.createElement('div');
    divGroup2.classList.add('footer-group');

    const fourthP = document.createElement('p');
    fourthP.textContent = ' By Linas Paulauskas';

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile-group');

    const profileLink = document.createElement('a');
    profileLink.classList.add('profile-link');
    profileLink.href = 'https://github.com/paulauskas-linas';
    profileLink.target = '_blank';

    const profileImg = document.createElement('img');
    profileImg.classList.add('profile-img');
    profileImg.src = 'https://gist.githubusercontent.com/paulauskas-linas/5634d9c485f2d5670aab310d127ba085/raw/3737ef88d2c002b6579de37f0a1c89c19afa527b/GitHub-icon.svg';
    profileImg.alt = 'github logo';

    profileLink.appendChild(profileImg);
    profileDiv.appendChild(profileLink);
    divGroup2.appendChild(fourthP);
    divGroup2.appendChild(profileDiv);

    footer.appendChild(divGroup1);
    footer.appendChild(divGroup2);

    return footer;
}
export default createFooter