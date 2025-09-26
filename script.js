
        // Seed data for the dynamic pages
        const data = {
            toys: [
                { id: 1, name: "Wooden Animal Puzzle", age: "1-3", type: "Cognitive", image: "assets/images/puzzle.png" },
                { id: 2, name: "Magnetic Drawing Board", age: "3-5", type: "Creativity", image: "assets/images/Drawing Board.png" },
                { id: 3, name: "Robot Coding Kit", age: "6-8", type: "STEM", image: "assets/images/Robot Kit.png" },
                { id: 4, name: "Colorful Playdough Set", age: "1-3", type: "Sensory", image: "assets/images/Playdough.png" },
                { id: 5, name: "Telescope for Kids", age: "6-8", type: "STEM", image: "assets/images/Telescope.png" },
                { id: 6, name: "Wooden Kitchen Set", age: "3-5", type: "Pretend Play", image: "assets/images/Kitchen set.png" },
                { id: 7, name: "Building Blocks", age: "3-5", type: "Creativity", image: "assets/images/Blocks.png" },
                { id: 8, name: "Toddler Drum Set", age: "1-3", type: "Music", image: "assets/images/Drum Set.png" },
            ],
            blogPosts: [
                { id: 1, title: "The Power of Play: Why Toys Are More Than Fun", date: "October 20, 2024", image: "assets/images/Play is Learning.png", excerpt: "Play is a fundamental part of childhood development. It's how children learn about the world..." },
                { id: 2, title: "5 Tips for Choosing the Right Educational Toys", date: "October 15, 2024", image: "assets/images/Toy Guide.png", excerpt: "Choosing a toy can be overwhelming! Here are five simple tips to help you select a toy that will both entertain and educate your child..." },
                { id: 3, title: "Screen Time vs. Play Time: Finding the Right Balance", date: "October 10, 2024", image: "assets/images/Screen Time.png", excerpt: "In our digital world, it's easy for children to get hooked on screens. Learn how to balance screen time with valuable hands-on play..." }
            ],
            faqs: [
                { question: "What are your shipping policies?", answer: "We offer free shipping on all orders over $50. Standard shipping takes 3-5 business days." },
                { question: "Do you offer returns or exchanges?", answer: "Yes, we have a 30-day return policy. If you're not satisfied, you can return the product for a full refund." },
                { question: "How can I track my order?", answer: "Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your package on the carrier's website." },
                { question: "Are your toys eco-friendly?", answer: "We are committed to sustainability. Many of our toys are made from recycled or sustainably sourced materials. Look for the 'Eco-Friendly' label on product pages." }
            ]
        };

        // Function to render the toy grid
        function renderToys() {
            const toyGrid = document.getElementById('toy-grid');
            toyGrid.innerHTML = data.toys.map(toy => `
                <div class="bg-white rounded-2xl border-4 border-black p-6 card-shadow transition-all duration-300 hover-lift text-center">
                    <img src="${toy.image}" alt="${toy.name}" class="rounded-xl border-4 border-black mb-4 w-full h-auto">
                    <h4 class="text-2xl font-bold text-black">${toy.name}</h4>
                    <p class="text-sm text-gray-600 mt-2">Ages ${toy.age} • ${toy.type}</p>
                </div>
            `).join('');
        }

        // Function to render blog posts
        function renderBlogPosts() {
            const blogContainer = document.getElementById('blog-posts');
            blogContainer.innerHTML = data.blogPosts.map(post => `
                <div class="bg-white rounded-2xl border-4 border-black p-6 card-shadow transition-all duration-300 hover-lift md:flex md:space-x-8 items-start">
                    <img src="${post.image}" alt="${post.title}" class="rounded-xl border-4 border-black mb-4 md:mb-0 md:w-1/3">
                    <div>
                        <h4 class="text-3xl font-bold text-black">${post.title}</h4>
                        <p class="text-sm text-gray-500 mt-1 mb-3">${post.date}</p>
                        <p class="text-lg text-gray-700">${post.excerpt}</p>
                    </div>
                </div>
            `).join('');
        }

        // Function to render FAQs
        function renderFaqs() {
            const faqContainer = document.getElementById('faq-section');
            faqContainer.innerHTML = data.faqs.map((faq, index) => `
                <div class="bg-white rounded-xl border-4 border-black overflow-hidden">
                    <div class="faq-question p-4 flex justify-between items-center text-black font-semibold">
                        <span>${faq.question}</span>
                        <span class="text-2xl">+</span>
                    </div>
                    <div class="faq-answer bg-gray-100 p-4 border-t-4 border-black text-gray-700">
                        ${faq.answer}
                    </div>
                </div>
            `).join('');

            // Add event listeners for FAQ accordion
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const plusSign = question.querySelector('span:last-child');
                    
                    const isActive = question.classList.contains('active');
                    
                    // Close all others
                    document.querySelectorAll('.faq-question').forEach(q => {
                        q.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = 0;
                        q.querySelector('span:last-child').textContent = '+';
                    });

                    // Toggle the clicked one
                    if (!isActive) {
                        question.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        plusSign.textContent = '-';
                    }
                });
            });
        }

        // Main navigation logic
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }

        // Event listeners for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = e.currentTarget.getAttribute('href').substring(1);
                showPage(pageId);
                window.history.pushState(null, '', `#${pageId}`);
            });
        });

        // Handle page based on URL hash on load
        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1) || 'home';
            showPage(hash);
            renderToys();
            renderBlogPosts();
            renderFaqs();
        });
        
