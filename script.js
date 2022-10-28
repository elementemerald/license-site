const year = new Date().getFullYear();
const copyright = document.querySelector(".copyright");
copyright.innerHTML = `Copyright &copy; ${year} <a href="https://ryand.ca">Ryan Omasta</a> &lt;ryand@emeraldsys.xyz&gt;`;