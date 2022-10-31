const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
## Zhaozhan Song (宋赵展)    

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---

I'm Zhaozhan Song, an assistant project manager. 

- 🔭 I’m currently striving for a better life in Beijing.           
- 📫 My E-mail: simingsong@foxmail.com

### About me  
- M.S. in Control Engineering, 2022 
  - School of Automation, Beijing Institute of Technology (BIT)
- B.S. in Automation, 2019
  - College of Information Science and Engineering, Northeast University (NEU)
 
### My Skill Set  
<table><tr><td valign="top" width="33%">

<div align = "center">Deep Learning</div>
&nbsp;
<div align="center">  
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
<a href="https://pytorch.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/pytorch-icon.svg" alt="pytorch" height="50" /></a>  
</div>

</td><td valign="top" width="33%">



<div align = "center">Backend</div>
&nbsp;
<div align="center">  
<a href="https://www.linux.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="50" /></a>  
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
<a href="https://www.cplusplus.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++" height="50" /></a>  
<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#" height="50" /></a>  
<a href="https://www.mysql.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" /></a>  

</div>

</td><td valign="top" width="33%">



<div align = "center">DevOps</div>         
&nbsp;
<div align="center">  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://www.jenkins.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg" alt="Jenkins" height="50" /></a>  
<a href="https://www.docker.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="50" /></a>  
</div>

</td></tr></table>  

<br/>

\
`

console.log(readme)
