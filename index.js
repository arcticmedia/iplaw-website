let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        header.classList.add('header-hide');
    } else {
        // Scrolling up
        header.classList.remove('header-hide');
    }
    lastScrollY = window.scrollY;
});

// Team Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
        {
            id: 1,
            name: "Kristján Rúnarsson",
            title: "Senior Patent Attorney",
            description: "Kristján is a distinguished patent attorney with over 20 years of experience in European patent validation and international intellectual property law. He specializes in complex patent applications, oppositions, and appeals before the European Patent Office. Kristján has successfully handled hundreds of patent validations in Iceland and has extensive experience in patent litigation and licensing agreements. He is a member of the International Association of Intellectual Property Attorneys (AIPPI) and regularly speaks at international IP conferences.",
            expertise: ["European Patents", "Patent Validation", "IP Law", "Patent Litigation", "Licensing Agreements"],
            email: "kristjan@krlaw.is"
        },
        {
            id: 2,
            name: "Anna María Jónsdóttir",
            title: "Trademark Specialist",
            description: "Anna María is a leading trademark specialist with expertise in brand protection strategies and international trademark law. She has successfully registered and defended trademarks for clients across various industries, from technology startups to established multinational corporations. Anna María specializes in trademark opposition proceedings, domain name disputes, and international trademark portfolio management. She is fluent in multiple languages and has particular expertise in Nordic and European trademark law.",
            expertise: ["Trademarks", "Brand Protection", "International Law", "Domain Disputes", "Portfolio Management"],
            email: "anna@krlaw.is"
        }
    ];

    // Team member data
    window.teamMembersData = teamMembers;

    // Modal functionality
    const modal = document.getElementById('teamModal');
    const modalClose = document.querySelector('.modal-close');
    const viewProfileBtns = document.querySelectorAll('.view-profile-btn');

    // Open modal
    viewProfileBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const memberCard = this.closest('.team-member');
            const memberId = parseInt(memberCard.dataset.member);
            const member = teamMembers.find(m => m.id === memberId);
            
            if (member) {
                openTeamModal(member);
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeTeamModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTeamModal();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeTeamModal();
        }
    });

    function openTeamModal(member) {
        const modalName = modal.querySelector('.modal-name');
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-description');
        const modalExpertise = modal.querySelector('.modal-expertise');
        const modalContact = modal.querySelector('.modal-contact p a');

        modalName.textContent = member.name;
        modalTitle.textContent = member.title;
        modalDescription.textContent = member.description;
        modalContact.href = `mailto:${member.email}`;
        modalContact.textContent = member.email;

        // Clear and populate expertise tags
        modalExpertise.innerHTML = '';
        member.expertise.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'expertise-tag';
            tagElement.textContent = tag;
            modalExpertise.appendChild(tagElement);
        });

        // Show modal with animation
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    function closeTeamModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    // Animate stats on scroll
    const statItems = document.querySelectorAll('.stat-item');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        statsObserver.observe(item);
    });

    // Hover effects for team cards
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateX(1deg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });

    // Expertise tag hover effects
    const expertiseTags = document.querySelectorAll('.expertise-tag');
    expertiseTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Contact Section Functionality
    const contactActionBtns = document.querySelectorAll('.contact-action-btn');
    
    contactActionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.dataset.action;
            
            switch(action) {
                case 'email':
                    window.location.href = 'mailto:info@krlaw.is?subject=Inquiry from KR Law Website';
                    break;
                case 'phone':
                    window.location.href = 'tel:+3545111890';
                    break;
                case 'map':
                    window.open('https://maps.google.com/?q=Hruanatunga+66,+Kópavogur,+Iceland', '_blank');
                    break;
            }
        });
    });



    // Hover effects for contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Services Section Functionality
    const serviceActionBtns = document.querySelectorAll('.service-action-btn');
    
    serviceActionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.dataset.service;
            
            switch(service) {
                case 'patent':
                    window.location.href = 'patent-filing.html';
                    break;
                case 'trademark':
                    window.location.href = 'trademark-filing.html';
                    break;
                case 'agreements':
                    window.location.href = 'International-agreements.html';
                    break;
            }
        });
    });

    // Animate service stats on scroll
    const serviceStatItems = document.querySelectorAll('.service-stat-item');
    const serviceObserverOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, serviceObserverOptions);

    serviceStatItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        serviceStatsObserver.observe(item);
    });



    // Feature tag hover effects
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
