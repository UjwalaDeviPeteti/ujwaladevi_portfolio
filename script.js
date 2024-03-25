const typed=new Typed(".multiple-text",{
    strings:["Developer","Youtuber","Typer","Blogger"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

/**/ 
let sections=document .querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};





  // Function to open the PDF when the button is clicked
//   document.getElementById('openPdfButton').addEventListener('click', function() {
//     // Replace 'path_to_your_pdf_file.pdf' with the actual path or URL to your PDF file
//     var pdfUrl = 'src\New Resume (1).pdf';
//     window.open(pdfUrl, '_blank'); // Open in a new tab or window
// });