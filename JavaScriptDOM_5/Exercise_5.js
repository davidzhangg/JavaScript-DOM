/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/
const job1 = document.querySelector(".jobs .job-card");
//cloneNode function will create an exact copy of the HTML elements inside of job1
const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);
job1.insertAdjacentElement("afterend", job2);
job1.insertAdjacentElement("afterend", job3);
job1.insertAdjacentElement("afterend", job4);

/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/
job2.querySelector("h3").innerText = "Python Developer";
job3.querySelector("h3").innerText = "Java Developer";
job4.querySelector("h3").innerText = "JavaScript Developer";

/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.
*/
const jobs = document.querySelectorAll(".jobs .job-card");
document.querySelector("#jobs-listed span").innerText = jobs.length;
/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/
document.querySelector("#search").addEventListener("keyup", event => {
  const elem = event.target.value;
  Array.from(document.querySelectorAll(".jobs .job-card")).forEach(job => {
    const jobTitle = job.querySelector("h3").innerText;
    if (!jobTitle.toLowerCase().includes(elem.toLowerCase())) {
      job.style.display = "none";
    } else {
      job.style.display = "block";
    }
  });
});
/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/
document.querySelector("#show-all").addEventListener("click", () => {
  Array.from(document.querySelectorAll(".jobs .job-card")).forEach(
    job => (job.style.display = "block")
  );
  document.querySelector("#search").value = "";
});
