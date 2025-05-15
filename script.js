// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Close mobile menu
    navbar.classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Dashboard Navigation
function showDashboard(sectionId) {
    // Hide all dashboard sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`dashboard-${sectionId}`).classList.add('active');
    
    // Update active sidebar link
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the clicked link
    const activeLink = Array.from(document.querySelectorAll('.sidebar-menu a')).find(link => {
        return link.textContent.trim().includes(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    });
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top of main content
    document.querySelector('.main-content').scrollTo(0, 0);
}

// Auth Modal
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const authClose = document.getElementById('auth-close');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

// Show auth modal
loginBtn.addEventListener('click', function() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

registerBtn.addEventListener('click', function() {
    authModal.classList.add('active');
    switchTab('register');
    document.body.style.overflow = 'hidden';
});

// Close auth modal
authClose.addEventListener('click', function() {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Switch between login and register tabs
authTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
    });
});

function switchTab(tabId) {
    authTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        }
    });

    authForms.forEach(form => {
        form.classList.remove('active');
        if (form.id === `${tabId}-form`) {
            form.classList.add('active');
        }
    });
}

// User Menu Dropdown
const userAvatar = document.getElementById('user-avatar');
const dropdownMenu = document.getElementById('dropdown-menu');

userAvatar.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    dropdownMenu.classList.remove('active');
});

// Tutor Modal
function openTutorModal(tutorId) {
    const tutorModal = document.getElementById('tutor-modal');
    tutorModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Get tutor data by ID
    const tutorData = getTutorData(tutorId);

    // Update modal with that data
    updateTutorModal(tutorData);
}

function closeTutorModal() {
    const tutorModal = document.getElementById('tutor-modal');
    tutorModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


// Dummy function for demo purpose — replace with real data in production
function getTutorData(id) {
    const tutors = [

        //Hafiza Amina
        {
            name: "Hafiza Amina",
            specialization: "Tajweed Specialist",
            image: "images/hafiza-amina.jpg",
            bio: "Graduate of Al-Azhar University with Ijazah in Hafs and Warsh recitation. 12 years of teaching experience in various Islamic institutes across the Middle East and Europe. Specializes in teaching proper tajweed rules with practical application.",
            qualifications: [
                "Bachelor in Islamic Studies, Al-Azhar University",
                "Ijazah in Hafs 'an 'Asim",
                "Ijazah in Warsh 'an Nafi'",
                "Certified Tajweed Instructor"
            ],
            skills: ["Hafs Recitation", "Warsh Recitation", "Tajweed Rules", "Advanced Recitation"],
            courses: [
                "Basic Tajweed Rules $59/month",
                "Applied Tajweed $69/month",
                "Hafs Recitation $79/month",
                "Warsh Recitation $89/month"
            ],
            rating: 4
        },


        //Hafiz Ali
        {
            name: "Hafiz Ali ",
            specialization: "Hifz Instructor",
            image: "images/hafiz-ali.jpg",
            bio: "Memorized the Quran at age 15, certified in Qaloon recitation. Specializes in children's memorization with innovative techniques that make memorization easier and more enjoyable for young learners.",
            qualifications: [
                "Hafiz of the Quran",
                "Ijazah in Qaloon 'an Nafi'",
                "Certified Child Education Specialist",
                "10 years teaching experience"
            ],
            skills: ["Hifz Techniques", "Children Education", "Qaloon Recitation", "Memorization"],
            courses: [
                "Kids Hifz Program $79/month",
                "Juz Amma Memorization $69/month",
                "Qaloon Recitation $89/month",
                "Advanced Hifz $99/month"
            ],
            rating: 5
        },


        //Sheikh Oamr
        {
            name: "Sheikh Omar ",
            specialization: "Qira'at Expert",
            image: "images/sheikh-omar.jpg",
            bio: "Sheikh Omar is a renowned Qira'at expert with extensive experience in teaching various Qira'at styles. He has a deep understanding of the intricacies of Quranic recitation and is passionate about sharing his knowledge with students.",
            qualifications: [
                "Ijazah in Qira'at (Multiple Styles)",
                "Certified Qira'at Instructor",
                "15 years of teaching experience",
                "Advanced Certification in Quranic Sciences"
            ],
            skills: ["Qira'at Techniques", "Tajweed Rules", "Advanced Recitation Methods", "Quranic Arabic Linguistics"],
            courses: [
                "Qira'at Fundamentals $99/month",
                "Advanced Qira'at $149/month",
                "Specialized Qira'at Training $199/month",
                "Private Qira'at Lessons $220/month"
            ],
            rating: 4
        },


        //Ustadha Fatima
        {
            name: "Ustadha Fatima",
            specialization: "Beginners Specialist",
            image: "images/ustada-fatima.jpg",
            bio: "Ustadha Fatima is a dedicated and experienced teacher specializing in guiding beginners on their Islamic education journey. She has a passion for nurturing young minds and helping them develop a strong foundation in Islamic studies.",
            qualifications: [
                "Bachelor's degree in Islamic Studies",
                "Certified Islamic Education Specialist",
                "8 years of teaching experience",
                "Advanced Training in Child Education"
            ],
            skills: ["Islamic Studies for Beginners", "Quranic Arabic", "Islamic History and Culture","Islamic Values and Ethics"],
            courses: [
                "Islamic Studies for Kids $59/month",
                "Quranic Arabic for Beginners $69/month",
                "Islamic History and Culture $79/month",
                "Islamic Values and Ethics for Kids $49/month"
            ],
            rating: 5
        },


        //Dr. Yusuf
        {
            name: "Dr. Yusuf",
            specialization: "Tafseer Scholar",
            image: "images/dr.yusuf.jpg",
            bio: "Dr. Yusuf is a distinguished Tafseer scholar with a passion for explaining the Quranic verses in a clear and concise manner. He has spent years studying the Quran and its interpretations, and has developed a unique approach to understanding the Islamic scripture.",
            qualifications: [
                "PhD in Tafseer and Islamic Studies",
                "Master’s degree in Quranic Exegesis",
                "Certified Islamic Scholar",
                "15 years of teaching experience"
            ],
            skills: ["Tafseer of the Quran", "Quranic Exegesis", "Islamic Theology", "Arabic Language and Literature"],
            courses: [
                "Tafseer of the Quran $99/month",
                "Quranic Exegesis $149/month",
                "Islamic Theology $79/month",
                "Arabic Language and Literature $89/month"
            ],
            rating: 4
        },


        //Hafiz Ibrahim
        {
            name: "Hafiz Ibrahim",
            specialization: "Memorization Coach",
            image: "images/hafiz-ibrahim.jpg",
            bio: "Hafiz Ibrahim is a dedicated Memorization Coach with a passion for helping students memorize the Quran and other Islamic texts. He has extensive experience in teaching memorization techniques and has developed a unique approach to make memorization easier and more effective.",
            qualifications: [
                "Hafiz of the Quran",
                "Certified Memorization Coach",
                "Specialized training in memorization techniques",
                "10 years of teaching experience"
            ],
            skills: ["Quran Memorization", "Islamic Texts Memorization", "Memorization Techniques", "Revision and Review Strategies"],
            courses: [
                "Quran Memorization Program $79/month",
                "Islamic Texts Memorization $69/month",
                "Memorization Techniques Workshop $99/session",
                "Revision and Review Strategies $49/month"
            ],
            rating: 4
        },


        //Sheikh Bilal
        {
            name: "Sheikh Bilal",
            specialization: "Tajweed & Ijazah Instructor",
            image: "images/sheikh-bilal.jpg",
            bio: "Sheikh Bilal is a highly respected Quran teacher known for his deep knowledge of Tajweed and Qira’at. With over a decade of experience, he has guided countless students through their journey of Quranic recitation and Ijazah certification with precision and sincerity.",
            qualifications: [
                "Bachelor’s degree in Quranic Sciences",
                "Ijazah in Shu'bah and Khalaf recitations",
                "Certified Tajweed Expert",
                "12+ years of teaching experience"
            ],
            skills: ["Ijazah Preparation", "Advanced Tajweed Rules", "Quranic Phonetics & Makharij", "Qira’at Comparison and Practice"],
            courses: [
                "Ijazah Training (Hafs/Shu'bah) $89/month",
                "Advanced Tajweed Mastery $79/month",
                "Qira’at Overview for Intermediate Students $69/month",
                "1-on-1 Quran Recitation Correction $49/month"
            ],
            rating: 5
        },


        //Ustadha Maryam
        {
            name: "Ustadha Maryam",
            specialization: "Female Tajweed & Tafseer",
            image: "images/ustada-maryam.jpg",
            bio: "Ustadha Maryam is a passionate and qualified teacher with deep expertise in Tajweed and Tafseer. She is known for her ability to simplify complex topics, making them easy to understand for sisters of all ages and backgrounds.",
            qualifications: [
                "Bachelor’s degree in Islamic Theology",
                "Certified in Hafs an Asim recitation with Ijazah",
                "Diploma in Tafseer and Quranic Sciences",
                "8+ years of teaching experience"
            ],
            skills: ["Tajweed for Womem", "Tafseer (Word-by-word & Thematic)", "Quran for Sisters", "Fiqh for Women"],
            courses: [
                "Tajweed for Sisters $69/month",
                "Tafseer Series: Surah-by-Surah $79/month",
                "Quranic Reflection Circle (Weekly) $69/month",
                "Women’s Fiqh Basics $49/month"
            ],
            rating: 5
        },


        // More tutor data would be added here
    ];
    
    return tutors[id - 1] || tutors[0];
}

function updateTutorModal(data) {

    // Update text content
    document.getElementById('modal-tutor-name').textContent = data.name;
    document.getElementById('modal-specialization').textContent = data.specialization;
    document.getElementById('modal-bio').textContent = data.bio;

    // Update avatar
    document.getElementById("modal-avatar").src = data.image;
    

    const qualificationsList = document.getElementById('modal-qualifications');
    qualificationsList.innerHTML = '';
    data.qualifications.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        qualificationsList.appendChild(li);
    });
    

    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'modal-skill';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });
    

    const coursesList = document.getElementById('modal-courses');
    coursesList.innerHTML = '';
    data.courses.forEach(course => {
        const parts = course.split(' $');
        const li = document.createElement('li');
        li.innerHTML = `${parts[0]} <span>$${parts[1]}</span>`;
        coursesList.appendChild(li);
    });
    

    const ratingContainer = document.getElementById('modal-rating');
    ratingContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        if (i <= Math.floor(data.rating)) {
            star.className = 'fas fa-star';
        } else if (i === Math.ceil(data.rating) && data.rating % 1 !== 0) {
            star.className = 'fas fa-star-half-alt';
        } else {
            star.className = 'far fa-star';
        }
        ratingContainer.appendChild(star);
    }
}


// Login/Register Form Submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would validate and send to server
    alert('Login functionality would be implemented here');
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // For demo purposes, show user menu
    document.getElementById('guest-buttons').style.display = 'none';
    document.getElementById('user-menu').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would validate and send to server
    alert('Registration functionality would be implemented here');
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // For demo purposes, show user menu
    document.getElementById('guest-buttons').style.display = 'none';
    document.getElementById('user-menu').style.display = 'block';
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('guest-buttons').style.display = 'flex';
    document.getElementById('user-menu').style.display = 'none';
    showPage('home');
});

document.getElementById('logout-btn-sidebar').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('guest-buttons').style.display = 'flex';
    document.getElementById('user-menu').style.display = 'none';
    showPage('home');
});

// Tutor Filter
document.addEventListener("DOMContentLoaded", function () {

const filterBtns = document.querySelectorAll('.filter-btn');
const tutorCards = document.querySelectorAll(".tutor-card");

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {

        // Active button toggle
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const category = this.textContent.trim();

        // Show/hide cards based on selected category
        tutorCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            if (category === "All" || cardCategory === category) {
              card.style.display = "block";
            } 
            
            else {
              card.style.display = "none";
            }
        });
      });
    });
  });

  
// Initialize Chart.js for Progress
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Tajweed Mastery',
                    data: [10, 25, 38, 45, 58, 65],
                    borderColor: 'rgba(42, 157, 143, 1)',
                    backgroundColor: 'rgba(42, 157, 143, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Hifz Program',
                    data: [5, 15, 25, 32, 38, 42],
                    borderColor: 'rgba(233, 196, 106, 1)',
                    backgroundColor: 'rgba(233, 196, 106, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Your Learning Progress'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Completion %'
                    }
                }
            }
        }
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate feature cards on scroll
gsap.utils.toArray('.feature-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });
});

// Animate testimonials
gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8
    });
});

// Animate path items
gsap.utils.toArray('.path-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2
    });
});

// Animate tutor cards
gsap.utils.toArray('.tutor-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});